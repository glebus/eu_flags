# European Countries Learning Platform

A web-based learning platform to help you learn about European countries, their capitals, flags, and locations.

## Features

- **Country Browser**: Browse and filter through all European countries
- **Interactive Map**: Visualize countries on an interactive map
- **Detailed Information**: View detailed information about each country including:
  - Capital city
  - Geographic region
  - Description
  - Neighboring countries
  - Interesting facts
  - Flag representation
- **Knowledge Quizzes**: Test your knowledge with different quiz types:
  - Capitals Quiz
  - Flags Quiz
  - Regions Quiz
  - Facts Quiz

## Technologies Used

- React
- TypeScript
- React Router
- Styled Components

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd european-countries-learning-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Usage

- **Home Page**: Introduction to the platform and overview of features
- **Countries Page**: Browse all European countries, with filtering options
- **Country Detail Page**: View detailed information about a specific country
- **Quiz Page**: Take quizzes to test your knowledge
- **Map Page**: Explore countries on an interactive map

## Project Structure

```
├── public/              # Public assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── data/            # Country data
│   ├── pages/           # Page components
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
└── package.json         # Project dependencies and scripts
```

## Customization

- To add or update country information, edit the `src/data/europeanCountries.ts` file
- To modify styles, edit the component-specific styles or `src/index.css` for global styles
- To add new quiz types, update the quiz components with additional logic

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Flag emoji support provided by Unicode Common Locale Data Repository
- Geographic information sourced from various public domain references
