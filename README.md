
# React App Template

This is a template for a React application, set up with TypeScript, ESLint, Prettier, and various useful libraries and configurations. This template aims to provide a strong foundation for developing modern React applications.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v18.x or higher)
- npm (v6.x or higher) or Yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/new-marty/react-app-template.git
   cd react-app-template
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App

To start the development server:
```bash
npm run dev
# or
yarn dev
```

### Building the App

To build the project for production:
```bash
npm run build
# or
yarn build
```

### Linting and Formatting

To lint the code:
```bash
npm run lint
# or
yarn lint
```

To automatically fix linting issues:
```bash
npm run lint:fix
# or
yarn lint:fix
```

To format the code using Prettier:
```bash
npm run format
# or
yarn format
```

### Spell Check

To check spelling:
```bash
npm run spellcheck
# or
yarn spellcheck
```

To add new words to the spellcheck dictionary:
```bash
npm run spellcheck:add
# or
yarn spellcheck:add
```

## Configuration

### ESLint

The ESLint configuration is located in `.eslintrc.json`. It extends recommended configurations from `eslint`, `@typescript-eslint`, `prettier`, `jsdoc`, and `json`.

### Prettier

The Prettier configuration is located in `.prettierrc.json`. It enforces consistent code formatting across the project.

### TypeScript

The TypeScript configuration is located in `tsconfig.json`. It includes settings for strict type checking and module resolution.

## Available Scripts

- `dev`: Start the development server.
- `build`: Build the project for production.
- `format`: Format the code using Prettier.
- `lint`: Lint the code using ESLint.
- `lint:fix`: Automatically fix linting issues.
- `prepare`: Set up Husky for Git hooks.
- `spellcheck`: Check for spelling errors.
- `spellcheck:add`: Add new words to the spellcheck dictionary.

## Dependencies

### Main Dependencies

- `react`: JavaScript library for building user interfaces.
- `react-dom`: Provides DOM-specific methods for React.
- `react-router-dom`: Declarative routing for React.
- `@mui/material`: Material-UI components.
- `@emotion/react`: CSS-in-JS library for styling React components.
- `@emotion/styled`: Styled components for Emotion.

### Development Dependencies

- `typescript`: TypeScript language.
- `eslint`: Pluggable JavaScript linter.
- `prettier`: Code formatter.
- `husky`: Git hooks.
- `lint-staged`: Run linters on staged git files.
- `vite`: Next generation frontend tooling.
- `vite-tsconfig-paths`: Vite plugin to use TypeScript's path mapping.
- `cspell`: Spell checker for code.
- `@vitejs/plugin-react`: Official Vite plugin for React.
- `@typescript-eslint/*`: TypeScript specific linting rules for ESLint.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or suggestions.

---

This README provides a comprehensive overview of the project setup and configuration. If you have any questions, please feel free to reach out. Happy coding!
