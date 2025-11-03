# Project Overview

This is a React project designed to showcase and test various React code examples. It leverages TypeScript for type safety, Vite for a fast development experience, and Storybook for component documentation and isolated development. The project includes examples of common React patterns and potential issues, such as context API usage and state management.

## Technologies Used

*   **Framework:** React
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Component Documentation/Testing:** Storybook
*   **UI Library:** Ant Design
*   **Styling:** Sass

## Building and Running

### Prerequisites

*   Node.js (v20.14.0 as specified in `volta` in `package.json`)
*   pnpm (v7.33.7 as specified in `volta` in `package.json`)

### Installation

To install the project dependencies, run the following command:

```bash
pnpm install
```

### Available Scripts

*   **`npm run dev`**: Starts the Vite development server for the main React application.
*   **`npm run build`**: Builds the project for production using Vite and TypeScript.
*   **`npm run lint`**: Runs ESLint to check for code quality and style issues.
*   **`npm run storybook`**: Starts the Storybook development server.
*   **`npm run build-storybook`**: Builds the Storybook static application for deployment.
*   **`npm run storybook-docs`**: Starts the Storybook development server in documentation mode.

## Project Structure

*   **`.storybook/`**: Storybook configuration files.
*   **`public/`**: Static assets.
*   **`src/`**: Main source code directory.
    *   **`src/assets/`**: Static assets used within the React components.
    *   **`src/components/`**: Reusable React components, including specific examples like `CaretPopup`, `SendBeacon`, `SetStateBug`, and `UseContextBug`.
    *   **`src/examples/`**: Example usage of the components.
    *   **`src/stories/`**: Storybook stories for various components, demonstrating their usage and different states.
*   **`package.json`**: Project metadata and dependencies.
*   **`vite.config.ts`**: Vite build configuration.
*   **`tsconfig.json`**: TypeScript configuration.

## Development Conventions

*   **Component-driven Development:** The project heavily utilizes Storybook, indicating a component-driven development approach.
*   **TypeScript:** All new code should be written in TypeScript, adhering to the configurations in `tsconfig.json`.
*   **Linting:** ESLint is configured to maintain code quality and consistency. Developers should run `npm run lint` regularly.
*   **Styling:** Components use CSS and Sass for styling.
