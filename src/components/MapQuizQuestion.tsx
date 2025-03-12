import React, { useState, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from 'react-simple-maps';
import { useTranslation } from 'react-i18next';
import { Country } from '../data/europeanCountries';
import { 
  Box, 
  Typography, 
  Paper, 
  Button,
  IconButton,
  Stack,
  Alert,
  styled,
  Grid,
  CircularProgress
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Use an online GeoJSON source for Europe with a backup source
const EUROPE_GEO_URL = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json";
const BACKUP_GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface MapQuizQuestionProps {
  country: Country;
  onAnswer: (isCorrect: boolean, countryId: string) => void;
  showAnswer: boolean;
  selectedCountryId: string | null;
}

// Styled components
const MapWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 500,
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  backgroundColor: '#F5F8FA',
  boxShadow: theme.shadows[2],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 768px)': {
    height: 350
  }
}));

const ZoomControls = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: 10,
  right: 10,
  zIndex: 10,
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden'
}));

const MapQuizQuestion: React.FC<MapQuizQuestionProps> = ({ 
  country, 
  onAnswer, 
  showAnswer, 
  selectedCountryId 
}) => {
  const { t } = useTranslation();
  const [position, setPosition] = useState({ coordinates: [10, 50], zoom: 2 });
  const [mapLoading, setMapLoading] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);
  const [useBackupSource, setUseBackupSource] = useState(false);
  
  // Ensure we have a reasonable timeout for loading the map
  useEffect(() => {
    const timer = setTimeout(() => {
      if (mapLoading) {
        if (!useBackupSource) {
          setUseBackupSource(true);
        } else {
          setMapError("Map is taking too long to load. Please try refreshing the page.");
        }
      }
    }, 8000);
    
    return () => clearTimeout(timer);
  }, [mapLoading, useBackupSource]);

  const handleZoomIn = () => {
    if (position.zoom >= 8) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 1.2 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 1.2 }));
  };

  const handleMoveEnd = (position: any) => {
    setPosition(position);
  };

  const handleMapLoad = () => {
    setMapLoading(false);
  };

  const handleCountryClick = (geo: any) => {
    if (showAnswer) return;
    
    try {
      // Extract country information
      const countryName = geo.properties.name || geo.properties.NAME || '';
      // Convert country name to ID
      const normalizedCountryId = countryName?.toLowerCase().replace(/\s+/g, '_') || '';
      
      const isCorrect = normalizedCountryId === country.id;
      onAnswer(isCorrect, normalizedCountryId);
    } catch (error) {
      onAnswer(false, 'error');
    }
  };

  const getCountryFillColor = (geo: any) => {
    try {
      const countryName = geo.properties.name || geo.properties.NAME || '';
      const normalizedCountryId = countryName?.toLowerCase().replace(/\s+/g, '_') || '';
      
      if (showAnswer) {
        if (normalizedCountryId === country.id) {
          return "#4CAF50"; // Correct answer - green
        } else if (normalizedCountryId === selectedCountryId) {
          return "#F44336"; // Wrong answer - red
        }
      } else if (normalizedCountryId === selectedCountryId) {
        return "#2196F3"; // Selected - blue
      }
      
      return "#D6D6DA"; // Default color
    } catch (error) {
      return "#D6D6DA"; // Default color on error
    }
  };

  // Fallback to multiple choice if needed
  if (mapError) {
    return (
      <Box sx={{ mt: 3, position: 'relative' }}>
        <Alert severity="error">
          {mapError || 'Map failed to render. Please try a different quiz or refresh the page.'}
        </Alert>
        
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" gutterBottom>
            Please answer the following question: Where is <strong>{country.name}</strong> located in Europe?
          </Typography>
          
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {/* Fallback to multiple choice if map doesn't work */}
            {['France', 'Germany', 'Spain', country.name].sort(() => Math.random() - 0.5).map((option, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Button
                  fullWidth
                  variant="outlined"
                  disabled={showAnswer}
                  onClick={() => {
                    const isCorrect = option === country.name;
                    onAnswer(isCorrect, isCorrect ? country.id : 'wrong');
                  }}
                  sx={{ 
                    justifyContent: 'flex-start',
                    padding: '12px',
                    textTransform: 'none'
                  }}
                >
                  {option}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 3, position: 'relative' }}>
      <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
        Find and click on: <strong>{country.name}</strong>
      </Typography>
      
      <MapWrapper>
        {mapLoading && (
          <Box sx={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            zIndex: 5,
            backgroundColor: 'rgba(255, 255, 255, 0.7)'
          }}>
            <CircularProgress />
            <Typography variant="body1" sx={{ ml: 2 }}>
              Loading map...
            </Typography>
          </Box>
        )}
        
        <ZoomControls elevation={2}>
          <Stack>
            <IconButton onClick={handleZoomIn} size="small">
              <AddIcon />
            </IconButton>
            <IconButton onClick={handleZoomOut} size="small">
              <RemoveIcon />
            </IconButton>
          </Stack>
        </ZoomControls>
        
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [-10.0, -52.0, 0],
            center: [-5, 5],
            scale: 1100
          }}
          style={{
            width: "100%",
            height: "100%"
          }}
        >
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates as [number, number]}
            onMoveEnd={handleMoveEnd}
          >
            <Geographies geography={useBackupSource ? BACKUP_GEO_URL : EUROPE_GEO_URL}>
              {({ geographies }) => {
                // Once geographies are loaded, set loading to false
                if (geographies.length > 0 && mapLoading) {
                  handleMapLoad();
                }
                
                return geographies.map(geo => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => handleCountryClick(geo)}
                    style={{
                      default: {
                        fill: getCountryFillColor(geo),
                        stroke: "#FFFFFF",
                        strokeWidth: 0.5,
                        outline: "none"
                      },
                      hover: {
                        fill: showAnswer ? getCountryFillColor(geo) : "#1976D2",
                        stroke: "#FFFFFF",
                        strokeWidth: 0.75,
                        outline: "none",
                        cursor: showAnswer ? "default" : "pointer"
                      },
                      pressed: {
                        fill: getCountryFillColor(geo),
                        stroke: "#FFFFFF",
                        strokeWidth: 0.5,
                        outline: "none"
                      }
                    }}
                  />
                ));
              }}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </MapWrapper>
      
      <Typography 
        variant="subtitle1" 
        align="center" 
        sx={{ mt: 2, fontStyle: 'italic', color: 'text.secondary' }}
      >
        {t('map.tip')}
      </Typography>
    </Box>
  );
};

export default MapQuizQuestion; 