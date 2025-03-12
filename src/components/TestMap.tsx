import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from 'react-simple-maps';
import { Box, Typography, Alert, Paper } from '@mui/material';

// Simple map showing a world map with basic styling
const TestMap: React.FC = () => {
  // Basic GeoJSON for a simple world map
  const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Test Map</Typography>
      <Alert severity="info" sx={{ mb: 2 }}>
        This is a simple world map using react-simple-maps to test if the library is working.
      </Alert>
      
      <Paper sx={{ 
        height: 400, 
        width: '100%', 
        overflow: 'hidden',
        backgroundColor: '#F5F8FA'
      }}>
        <ComposableMap>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none",
                        stroke: "#FFFFFF",
                        strokeWidth: 0.5
                      },
                      hover: {
                        fill: "#1976D2",
                        outline: "none",
                        stroke: "#FFFFFF",
                        strokeWidth: 0.5
                      },
                      pressed: {
                        fill: "#1976D2",
                        outline: "none",
                        stroke: "#FFFFFF",
                        strokeWidth: 0.5
                      }
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </Paper>
      
      <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
        If you can see a map above, the react-simple-maps library is working correctly.
        If not, there may be an issue with the library installation or configuration.
      </Typography>
    </Box>
  );
};

export default TestMap; 