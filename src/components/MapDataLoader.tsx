import React from 'react';
import { Box, Typography, Alert } from '@mui/material';
import europeTopoJson from '../data/europe-topo.json';
import { isValidTopoJson } from '../utils/mapUtils';

/**
 * A helper component to verify that the map data loads properly
 */
const MapDataLoader: React.FC = () => {
  // Parse the Europe TopoJSON data
  const isValid = isValidTopoJson(europeTopoJson);
  const geometriesCount = isValid ? europeTopoJson.objects.europe.geometries.length : 0;
  
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Map Data Diagnostic</Typography>
      
      {isValid ? (
        <Alert severity="success">
          Map data loaded successfully. Found {geometriesCount} countries.
        </Alert>
      ) : (
        <Alert severity="error">
          Failed to load map data. Check the console for more details.
        </Alert>
      )}
      
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1">Data structure:</Typography>
        <pre style={{ 
          backgroundColor: '#f5f5f5', 
          padding: '10px', 
          borderRadius: '4px',
          overflow: 'auto',
          maxHeight: '300px'
        }}>
          {JSON.stringify({
            type: europeTopoJson.type,
            objects: {
              europe: {
                type: europeTopoJson.objects?.europe?.type,
                geometriesCount: geometriesCount
              }
            },
            arcs: Array.isArray(europeTopoJson.arcs) ? `${europeTopoJson.arcs.length} arcs` : 'No arcs found'
          }, null, 2)}
        </pre>
      </Box>
      
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1">Sample countries:</Typography>
        <ul>
          {isValid && europeTopoJson.objects.europe.geometries.slice(0, 5).map((geo: any, index: number) => (
            <li key={index}>
              {geo.properties?.name} (ID: {geo.properties?.id || geo.id})
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default MapDataLoader; 