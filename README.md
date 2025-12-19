# InvestED Website

A modern, educational fund website built with React, Vite, and Tailwind CSS.

## Features

- **Homepage**: Fund overview with navigation cards
- **About the Fund**: Purpose, student involvement, and governance structure
- **Fund Charter**: Complete charter documentation with FAQ
- **Investment Policy Statement (IPS)**: Decision-making framework and investment philosophy
- **Training Pathway**: Comprehensive 3-session training program overview

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
InvestED/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Homepage.jsx
│   │   ├── About.jsx
│   │   ├── Charter.jsx
│   │   ├── IPS.jsx
│   │   └── TrainingPathway.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Technologies Used

- **React**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing

## Customization

- Colors can be customized in `tailwind.config.js`
- Content can be modified in the respective page components
- Styling follows Tailwind CSS utility classes

## License

This project is for educational purposes.


