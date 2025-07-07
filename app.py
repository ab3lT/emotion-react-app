from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import cv2
import numpy as np
import torch
from model.model import Mini_Xception
from utils import get_label_emotion, histogram_equalization
from face_detector.face_detector import DnnDetector
from face_alignment.face_alignment import FaceAlignment
import torchvision.transforms.transforms as transforms

app = FastAPI()

# CORS (Allow frontend to call API)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or replace with your React app's URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = Mini_Xception().to(device)
model.eval()
checkpoint = torch.load('checkpoint/model_weights/weights_epoch_75.pth.tar', map_location=device)
model.load_state_dict(checkpoint['mini_xception'])

face_detector = DnnDetector('face_detector')
face_alignment = FaceAlignment()

@app.post("/predict")
async def predict_emotion(file: UploadFile = File(...)):
    contents = await file.read()
    npimg = np.frombuffer(contents, np.uint8)
    frame = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

    results = []

    faces = face_detector.detect_faces(frame)
    for (x, y, w, h) in faces:
        face_img = face_alignment.frontalize_face((x, y, w, h), frame)
        face_img = cv2.resize(face_img, (48, 48))
        face_img = histogram_equalization(face_img)
        input_tensor = transforms.ToTensor()(face_img).unsqueeze(0).to(device)

        with torch.no_grad():
            output = model(input_tensor)
            softmax = torch.nn.Softmax()(output.squeeze()).cpu().numpy()
            emotion_id = int(np.argmax(softmax))
            confidence = float(np.max(softmax))
            label = get_label_emotion(emotion_id)

        results.append({
        "label": str(label),
        "confidence": float(round(confidence, 3)),
        "box": [int(x), int(y), int(w), int(h)]
        })

    return {"results": results}
