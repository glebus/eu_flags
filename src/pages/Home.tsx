import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Paper, 
  Button, 
  Stack,
  Card,
  CardContent,
  styled
} from '@mui/material';

// Custom styled components with Material UI
const StyledHero = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: theme.spacing(8, 4),
  borderRadius: theme.shape.borderRadius,
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  position: 'relative',
  overflow: 'hidden',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `repeating-linear-gradient(
      45deg,
      rgba(255, 218, 68, 0.1),
      rgba(255, 218, 68, 0.1) 10px,
      transparent 10px,
      transparent 20px
    )`
  }
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  fontSize: '3rem',
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main
}));

const StyledLink = styled(Link)({
  textDecoration: 'none',
  display: 'inline-block'
});

const Home = () => {
  const { t } = useTranslation();

  return (
    <Container sx={{ py: 4 }}>
      <StyledHero elevation={3}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          sx={{ position: 'relative', fontWeight: 500 }}
        >
          {t('home.title')}
        </Typography>
        <Typography 
          variant="h5" 
          component="p" 
          sx={{ 
            maxWidth: 800, 
            mx: 'auto', 
            mb: 4, 
            position: 'relative',
            fontSize: { xs: '1.1rem', md: '1.25rem' }
          }}
        >
          {t('home.subtitle')}
        </Typography>
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={2} 
          justifyContent="center"
        >
          <StyledLink to="/countries">
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              sx={{ color: 'primary.main', fontWeight: 500, py: 1.5, px: 3 }}
            >
              {t('home.browseCountries')}
            </Button>
          </StyledLink>
          <StyledLink to="/quiz">
            <Button 
              variant="outlined" 
              size="large"
              sx={{ 
                bgcolor: 'white', 
                color: 'primary.main', 
                borderColor: 'white',
                fontWeight: 500,
                py: 1.5,
                px: 3,
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  borderColor: 'white'
                }
              }}
            >
              {t('home.takeQuiz')}
            </Button>
          </StyledLink>
        </Stack>
      </StyledHero>

      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          color="primary" 
          sx={{ mb: 4, fontWeight: 500 }}
        >
          {t('home.featuresTitle')}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                height: '100%', 
                textAlign: 'center', 
                p: 2,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <CardContent>
                <FeatureIcon>📚</FeatureIcon>
                <Typography variant="h5" component="h3" gutterBottom>
                  {t('home.features.info.title')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t('home.features.info.description')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                height: '100%', 
                textAlign: 'center', 
                p: 2,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <CardContent>
                <FeatureIcon>🎯</FeatureIcon>
                <Typography variant="h5" component="h3" gutterBottom>
                  {t('home.features.quiz.title')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t('home.features.quiz.description')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Paper 
        sx={{ 
          bgcolor: 'secondary.main', 
          textAlign: 'center', 
          p: 6, 
          borderRadius: 2
        }}
      >
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          sx={{ color: 'text.primary', fontWeight: 500 }}
        >
          {t('home.ctaTitle')}
        </Typography>
        <StyledLink to="/quiz">
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            sx={{ fontWeight: 500, py: 1.5, px: 4 }}
          >
            {t('home.ctaButton')}
          </Button>
        </StyledLink>
      </Paper>
    </Container>
  );
};

export default Home; 