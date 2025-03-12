import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, ButtonGroup, Button, Typography, useTheme, useMediaQuery } from '@mui/material';

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };
  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', ml: { xs: 1, md: 2 } }}>
      {!isMobile && (
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'white', 
            mr: 1, 
            fontSize: '0.9rem' 
          }}
        >
          {t('languageSwitcher.language')}:
        </Typography>
      )}
      <ButtonGroup size="small" variant="outlined">
        <Button 
          onClick={() => handleLanguageChange('en')}
          sx={{ 
            bgcolor: i18n.language === 'en' ? 'secondary.main' : 'transparent',
            color: i18n.language === 'en' ? 'primary.main' : 'white',
            borderColor: i18n.language === 'en' ? 'secondary.main' : 'white',
            '&:hover': {
              bgcolor: i18n.language === 'en' ? 'secondary.main' : 'rgba(255, 255, 255, 0.2)',
              borderColor: i18n.language === 'en' ? 'secondary.main' : 'white',
            },
            minWidth: '40px',
            py: 0.25,
            px: 1
          }}
        >
          EN
        </Button>
        <Button 
          onClick={() => handleLanguageChange('pl')}
          sx={{ 
            bgcolor: i18n.language === 'pl' ? 'secondary.main' : 'transparent',
            color: i18n.language === 'pl' ? 'primary.main' : 'white',
            borderColor: i18n.language === 'pl' ? 'secondary.main' : 'white',
            '&:hover': {
              bgcolor: i18n.language === 'pl' ? 'secondary.main' : 'rgba(255, 255, 255, 0.2)',
              borderColor: i18n.language === 'pl' ? 'secondary.main' : 'white',
            },
            minWidth: '40px',
            py: 0.25,
            px: 1
          }}
        >
          PL
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default LanguageSwitcher; 