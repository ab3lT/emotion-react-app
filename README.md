# my_lerd

A modern web application built with **React**, **Vite**, and **Tailwind CSS**.

## Table of Contents

- [my\_lerd](#my_lerd)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Development Server](#running-the-development-server)
    - [Building for Production](#building-for-production)
    - [Previewing the Production Build](#previewing-the-production-build)
  - [Available Scripts](#available-scripts)
  - [Customization](#customization)
  - [License](#license)

## Overview

my_lerd is a modular and scalable web application designed for rapid development and easy maintenance. It leverages the power of React for UI, Vite for fast builds and hot module replacement, and Tailwind CSS for utility-first styling.

## Features

- ⚡️ Fast development with Vite
- 🎨 Styled with Tailwind CSS
- 🧩 Modular component structure
- 📦 Easy to extend and maintain

## Project Structure

```
my_lerd/
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── public/
│   └── vite.svg
├── src/
│   ├── AnalysisPanel/
│   │   ├── AnalysisPanel.jsx
│   │   └── ProbabilityChart.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── assets/
│   │   └── react.svg
│   ├── EmotionDemonstrator/
│   │   └── EmotionDemonstrator.jsx
│   ├── Header/
│   │   └── Header.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── ProjectInfo/
│   │   └── ProjectInfo.jsx
│   ├── ResultsDisplay/
│   │   └── ResultsDisplay.jsx
│   └── VideoFeed/
│       └── VideoFeed.jsx
├── tailwind.config.js
└── vite.config.js
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd my_lerd
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Building for Production

```bash
npm run build
# or
yarn build
```

### Previewing the Production Build

```bash
npm run preview
# or
yarn preview
```

## Available Scripts

- `dev` - Start the development server
- `build` - Build the app for production
- `preview` - Preview the production build locally

## Customization

- **Tailwind CSS**: Edit `tailwind.config.js` to customize your design system.
- **Vite Config**: Modify `vite.config.js` for advanced build options.
- **Components**: Add or update components in the `src/` directory as needed.

## License

This project is licensed under the MIT License.
