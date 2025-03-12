import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  color: white;
  padding: 1.5rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  margin: 0;
`;

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <Copyright>
            {t('footer.copyright', { year: currentYear })}
          </Copyright>
          <div>
            <p>{t('footer.description')}</p>
          </div>
        </FooterContent>
      </div>
    </FooterContainer>
  );
};

export default Footer; 