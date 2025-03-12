import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Country } from '../data/europeanCountries';
// Material UI imports
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardActions, 
  Typography, 
  Button,
  styled
} from '@mui/material';

interface CountryCardProps {
  country: Country;
}

// Custom styled components using Material UI styled API
const FlagContainer = styled('span')(({ theme }) => ({
  fontSize: '2rem',
  marginRight: theme.spacing(1.5)
}));

const StyledLink = styled(Link)({
  textDecoration: 'none',
  display: 'inline-block',
  width: '100%'
});

const CountryCard = ({ country }: CountryCardProps) => {
  const { t } = useTranslation();
  
  // Function to create a capital ID for translation
  const getCapitalId = (capital: string): string => {
    return capital.toLowerCase().replace(/\s+/g, '_');
  };
  
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)'
        }
      }}
    >
      <CardHeader
        sx={{ 
          bgcolor: 'primary.main', 
          color: 'white',
          padding: 2
        }}
        avatar={<FlagContainer>{country.flag}</FlagContainer>}
        title={
          <Typography variant="h6" component="h2">
            {t(`countryNames.${country.id}`)}
          </Typography>
        }
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="body1" fontWeight={500} gutterBottom>
          {t('countries.capital')}: {t(`capitalNames.${getCapitalId(country.capital)}`, country.capital)}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {t('countries.region')}: {t(`regions.${country.region}`)}
        </Typography>
        <Typography variant="body2" sx={{ flexGrow: 1, mb: 2 }}>
          {country.description.length > 120
            ? `${country.description.substring(0, 120)}...`
            : country.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: 2, paddingTop: 0 }}>
        <StyledLink to={`/countries/${country.id}`}>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth
          >
            {t('common.learnMore')}
          </Button>
        </StyledLink>
      </CardActions>
    </Card>
  );
};

export default CountryCard; 