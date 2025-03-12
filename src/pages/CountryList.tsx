import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CountryCard from '../components/CountryCard';
import europeanCountries, { Country, Region } from '../data/europeanCountries';
import { 
  Container, 
  Typography, 
  Box,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Card,
  Stack,
  styled
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const NoResultsIcon = styled(Box)(({ theme }) => ({
  fontSize: '3rem',
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main
}));

const CountryList = () => {
  const { t, i18n } = useTranslation();
  const [countries, setCountries] = useState<Country[]>(europeanCountries);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>(europeanCountries);
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState<string>('');
  
  const regions: Region[] = ['northernEurope', 'southernEurope', 'westernEurope', 'easternEurope', 'centralEurope'];
  
  const getCapitalId = (capitalName: string) => {
    return capitalName.toLowerCase().replace(/\s+/g, '_');
  };
  
  useEffect(() => {
    // Filter countries based on search term and region
    let filtered = [...countries];
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(country => {
        // Get translated names for search
        const translatedCountryName = t(`countryNames.${country.id}`).toLowerCase();
        const translatedCapitalName = t(`capitalNames.${getCapitalId(country.capital)}`).toLowerCase();
        const originalCountryName = country.name.toLowerCase();
        const originalCapitalName = country.capital.toLowerCase();
        
        return translatedCountryName.includes(searchLower) || 
               translatedCapitalName.includes(searchLower) ||
               originalCountryName.includes(searchLower) || 
               originalCapitalName.includes(searchLower);
      });
    }
    
    if (regionFilter) {
      filtered = filtered.filter(country => country.region === regionFilter);
    }
    
    setFilteredCountries(filtered);
  }, [countries, searchTerm, regionFilter, i18n.language, t]);
  
  return (
    <Container sx={{ py: 4 }}>
      <Typography 
        variant="h3" 
        component="h1" 
        align="center" 
        color="primary" 
        gutterBottom 
        sx={{ mb: 4, fontWeight: 500 }}
      >
        {t('countries.title')}
      </Typography>
      
      <Paper 
        elevation={2} 
        sx={{ 
          p: 3, 
          mb: 4,
          borderRadius: 2
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              id="searchInput"
              label={t('countries.searchLabel')}
              placeholder={t('countries.searchPlaceholder')}
              fullWidth
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="region-filter-label">{t('countries.regionFilterLabel')}</InputLabel>
              <Select
                labelId="region-filter-label"
                id="regionFilter"
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
                label={t('countries.regionFilterLabel')}
              >
                <MenuItem value="">{t('countries.allRegions')}</MenuItem>
                {regions.map(region => (
                  <MenuItem key={region} value={region}>{t(`regions.${region}`)}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
      
      {filteredCountries.length > 0 ? (
        <Grid container spacing={3}>
          {filteredCountries.map(country => (
            <Grid item key={country.id} xs={12} sm={6} md={4} lg={4} sx={{ display: 'flex' }}>
              <Box sx={{ width: '100%', height: '100%' }}>
                <CountryCard country={country} />
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Paper 
          elevation={2} 
          sx={{ 
            textAlign: 'center', 
            py: 5,
            borderRadius: 2
          }}
        >
          <NoResultsIcon>🔍</NoResultsIcon>
          <Typography variant="h5" component="h3" gutterBottom>
            {t('countries.noCountriesFound')}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t('countries.tryAdjusting')}
          </Typography>
        </Paper>
      )}
    </Container>
  );
};

export default CountryList; 