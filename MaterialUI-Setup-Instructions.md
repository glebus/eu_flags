# Material UI Setup Instructions

## Files Already Updated
1. `src/components/QuizGame.tsx` - Converted to use Material UI components
2. `src/components/CountryCard.tsx` - Converted to use Material UI components
3. `src/theme.ts` - Created a new Material UI theme with European flag colors

## To Complete the Setup

### 1. Update main.tsx

Modify your `src/main.tsx` file to include the ThemeProvider:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>
);
```

### 2. Update App.tsx

Modify your `src/App.tsx` to use Material UI components:

```jsx
import { Routes, Route } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import Home from './pages/Home';
import Countries from './pages/Countries';
import CountryDetail from './pages/CountryDetail';
import InteractiveMap from './components/InteractiveMap';
import Quiz from './pages/Quiz';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:id" element={<CountryDetail />} />
          <Route path="/map" element={<InteractiveMap />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
```

### 3. Continuing the Conversion

Continue updating other components from styled-components to Material UI, following these patterns:

1. Replace styled-components imports with Material UI components
2. Use the Material UI `sx` prop for styling
3. Use Material UI's theme system for consistent colors and spacing
4. For custom styling needs, use Material UI's `styled` API

### 4. Additional Components to Convert

Work through these files to complete the conversion:
- `src/components/Header.tsx`
- `src/components/InteractiveMap.tsx`
- `src/pages/Countries.tsx`
- `src/pages/CountryDetail.tsx`
- `src/pages/Home.tsx`
- `src/pages/Quiz.tsx`

### 5. Run the Application

After making these changes, run the application with:

```
npm run dev
```

The application should now use Material UI components and theme throughout. 