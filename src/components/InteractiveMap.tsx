import React, { useState, memo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from 'react-simple-maps';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Country } from '../data/europeanCountries';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Button, 
  IconButton,
  Paper,
  Stack,
  Divider,
  styled
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';

// Import the TopoJSON data
import europeTopoJson from '../data/europe-topo.json';

interface InteractiveMapProps {
  countries: Country[];
}

interface CountryInfoPopupProps {
  country: Country;
  position: { x: number; y: number };
}

// Styled components using Material UI
const MapWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 600,
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  backgroundColor: '#F5F8FA',
  boxShadow: theme.shadows[2],
  '@media (max-width: 768px)': {
    height: 400
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

const CountryTooltip = styled(Card)(({ theme }) => ({
  position: 'absolute',
  borderRadius: theme.shape.borderRadius,
  zIndex: 10,
  width: 300,
  maxWidth: '90%',
  boxShadow: theme.shadows[5],
  '&:after': {
    content: '""',
    position: 'absolute',
    left: '50%',
    bottom: -5,
    transform: 'translateX(-50%) rotate(45deg)',
    width: 10,
    height: 10,
    backgroundColor: 'white',
    boxShadow: '2px 2px 1px rgba(0, 0, 0, 0.1)'
  }
}));

const CountryTitle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  fontWeight: 500
}));

const InfoRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(0.75)
}));

const InfoLabel = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  marginRight: theme.spacing(1)
}));

const CountryInfoPopup = memo(({ country, position }: CountryInfoPopupProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleViewCountry = () => {
    navigate(`/countries/${country.id}`);
  };

  const getCapitalId = (capital: string): string => {
    return capital.toLowerCase().replace(/\s+/g, '_');
  };

  return (
    <CountryTooltip
      sx={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, calc(-100% - 10px))'
      }}
    >
      <CardContent sx={{ position: 'relative', pb: 2 }}>
        <IconButton 
          size="small" 
          sx={{ position: 'absolute', top: 8, right: 8 }}
          aria-label="close"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        <CountryTitle variant="h6" gutterBottom>
          <Box component="span" sx={{ fontSize: '1.5rem' }}>{country.flag}</Box>
          {t(`countryNames.${country.id}`)}
        </CountryTitle>

        <Stack spacing={1.5} sx={{ mt: 2, mb: 2 }}>
          <InfoRow>
            <InfoLabel variant="body2">{t('countries.capital')}:</InfoLabel>
            <Typography variant="body2">
              {t(`capitalNames.${getCapitalId(country.capital)}`, country.capital)}
            </Typography>
          </InfoRow>

          <InfoRow>
            <InfoLabel variant="body2">{t('countries.region')}:</InfoLabel>
            <Typography variant="body2">
              {t(`regions.${country.region}`)}
            </Typography>
          </InfoRow>
        </Stack>

        <Button 
          variant="contained" 
          color="primary" 
          size="small" 
          fullWidth
          onClick={handleViewCountry}
        >
          {t('common.learnMore')}
        </Button>
      </CardContent>
    </CountryTooltip>
  );
});

const InteractiveMap = ({ countries }: InteractiveMapProps) => {
  const { t } = useTranslation();
  const [position, setPosition] = useState({ coordinates: [15, 50], zoom: 4 });
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

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

  const handleCountryClick = (geo: any, event: React.MouseEvent) => {
    const countryId = geo.properties.ISO_A2.toLowerCase();
    const country = countries.find(c => c.id === countryId || c.id === countryId.toUpperCase());
    
    if (country) {
      // Calculate position for tooltip
      const rect = event.currentTarget.getBoundingClientRect();
      const containerRect = (event.currentTarget.parentNode?.parentNode as HTMLElement)?.getBoundingClientRect();
      
      setSelectedCountry(country);
      setTooltipPos({
        x: rect.left + rect.width / 2 - containerRect.left,
        y: rect.top - containerRect.top
      });
    }
  };

  const handleMapClick = () => {
    setSelectedCountry(null);
  };

  const getCountryFillColor = (region: string) => {
    switch (region) {
      case 'northernEurope':
        return '#3F88C5';
      case 'southernEurope':
        return '#FF7B59';
      case 'westernEurope':
        return '#8DA1B9';
      case 'easternEurope':
        return '#EF6461';
      case 'centralEurope':
        return '#7CB518';
      default:
        return '#DDD';
    }
  };

  return (
    <Box sx={{ pb: 3, position: 'relative' }}>
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom 
        sx={{ 
          textAlign: 'center', 
          mb: 3, 
          color: 'primary.main',
          fontWeight: 500
        }}
      >
        {t('map.title')}
      </Typography>

      <Typography variant="body1" paragraph align="center" sx={{ mb: 4 }}>
        {t('map.subtitle')}
      </Typography>

      <MapWrapper>
        <ZoomControls elevation={2}>
          <Stack>
            <IconButton onClick={handleZoomIn} size="small">
              <AddIcon />
            </IconButton>
            <Divider />
            <IconButton onClick={handleZoomOut} size="small">
              <RemoveIcon />
            </IconButton>
          </Stack>
        </ZoomControls>

        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [-10, -52, 0],
            scale: 1100,
          }}
          style={{ width: '100%', height: '100%' }}
          onClick={handleMapClick}
        >
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates as [number, number]}
            onMoveEnd={handleMoveEnd}
            maxZoom={8}
          >
            <Geographies geography={europeTopoJson}>
              {({ geographies }) =>
                geographies.map(geo => {
                  const countryId = geo.properties.ISO_A2.toLowerCase();
                  const country = countries.find(c => c.id === countryId || c.id === countryId.toUpperCase());

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={(event) => handleCountryClick(geo, event)}
                      style={{
                        default: {
                          fill: country ? getCountryFillColor(country.region) : '#DDD',
                          stroke: '#FFF',
                          strokeWidth: 0.5,
                          outline: 'none',
                        },
                        hover: {
                          fill: country ? '#FFD700' : '#DDD',
                          stroke: '#FFF',
                          strokeWidth: 0.5,
                          outline: 'none',
                          cursor: country ? 'pointer' : 'default',
                        },
                        pressed: {
                          fill: country ? '#FFD700' : '#DDD',
                          stroke: '#FFF',
                          strokeWidth: 0.5,
                          outline: 'none',
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>

        {selectedCountry && (
          <CountryInfoPopup country={selectedCountry} position={tooltipPos} />
        )}
      </MapWrapper>

      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          {t('map.instructions')}
        </Typography>
      </Box>
    </Box>
  );
};

export default InteractiveMap; 