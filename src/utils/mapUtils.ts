/**
 * Map-related utility functions
 */

/**
 * Checks if the provided TopoJSON is valid
 */
export const isValidTopoJson = (topoJson: any): boolean => {
  if (!topoJson) return false;
  if (!topoJson.objects) return false;
  if (!topoJson.objects.europe) return false;
  if (!topoJson.objects.europe.geometries) return false;
  return topoJson.objects.europe.geometries.length > 0;
};

/**
 * Gets a country ID from a geography object
 */
export const getCountryIdFromGeo = (geo: any): string | null => {
  try {
    return (geo.properties?.id || geo.id || '').toLowerCase();
  } catch (error) {
    console.error('Error getting country ID from geography:', error);
    return null;
  }
}; 