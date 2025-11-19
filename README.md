# 🌍 Fabrikam Hello World

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/uplandprojects/Fabrikam)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/uplandprojects/Fabrikam/releases)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A simple and elegant React application that displays "Hello World" with a dark mode toggle feature.

## 📖 Overview

Fabrikam is a React-based web application that demonstrates modern front-end development practices. It features a clean "Hello World" interface with a dark/light mode toggle, built using React 18 and Webpack.

## ✨ Features

- 🎨 **Clean, Modern UI** - Centered layout with gradient text effects
- 🌓 **Dark Mode Toggle** - Switch between light and dark themes
- ⚛️ **React 18** - Built with the latest React version
- 📦 **Webpack 5** - Modern bundling and development server
- 🧪 **Jest Testing** - Comprehensive test coverage with React Testing Library
- 🎯 **Accessible** - Proper ARIA labels and semantic HTML

## 📁 Project Structure

```
Fabrikam/
├── public/              # Static assets
│   ├── index.html      # HTML template
│   └── favicon.svg     # Favicon
├── src/                # Source files
│   ├── App.js          # Main React component with dark mode toggle
│   ├── App.test.js     # Component tests
│   └── index.js        # Application entry point
├── .babelrc            # Babel configuration
├── jest.config.js      # Jest testing configuration
├── jest.setup.js       # Jest setup file
├── package.json        # Project dependencies
├── webpack.config.js   # Webpack configuration
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** (comes with Node.js)

### 📥 Installation

```bash
# Clone the repository
git clone https://github.com/uplandprojects/Fabrikam.git

# Navigate to the project directory
cd Fabrikam

# Install dependencies
npm install
```

### 🏃 Running the Application

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:3000`

### 🏗️ Building for Production

```bash
# Create production build
npm run build
```

The optimized build will be created in the `dist/` directory.

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Webpack 5
- **Testing**: Jest 29 + React Testing Library
- **Transpiler**: Babel 7
- **Language**: JavaScript (ES6+)

## 💻 Development

The application uses:
- **Webpack Dev Server** for hot reloading during development
- **Babel** for transpiling modern JavaScript
- **Jest** for unit and integration testing
- **React Testing Library** for component testing

### Key Components

- **App.js**: Main application component featuring:
  - Centered "Hello World" heading with gradient styling
  - Dark/light mode toggle button
  - Responsive design with smooth transitions
  - Accessible UI with proper ARIA labels

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`npm test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Built with React and modern web development best practices.

---

**Made with ❤️ by the Fabrikam Team**
