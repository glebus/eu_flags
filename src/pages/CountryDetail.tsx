import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import europeanCountries, { Country } from '../data/europeanCountries';

const PageContainer = styled.div`
  padding: 2rem 0;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const CountryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CountryFlag = styled.div`
  font-size: 4rem;
  margin-right: 1rem;
`;

const CountryName = styled.h1`
  margin: 0;
  color: var(--primary-color);
`;

const CountrySubtitle = styled.div`
  flex-basis: 100%;
  color: #666;
  font-size: 1.2rem;
`;

const DetailCard = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 2rem;
  margin-bottom: 2rem;
`;

const DetailSection = styled.section`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  color: var(--primary-color);
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  margin-bottom: 1rem;
`;

const InfoLabel = styled.span`
  font-weight: 600;
  color: #666;
  margin-right: 0.5rem;
`;

const FactsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const FactItem = styled.li`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1rem;
  
  &:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--primary-color);
    font-weight: bold;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const NeighborGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
`;

const NeighborCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  text-decoration: none;
  color: var(--text-color);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const NeighborFlag = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const NeighborName = styled.div`
  font-size: 0.9rem;
  text-align: center;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

const CountryDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [country, setCountry] = useState<Country | null>(null);
  const [neighbors, setNeighbors] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Function to create a capital ID for translation
  const getCapitalId = (capital: string): string => {
    return capital.toLowerCase().replace(/\s+/g, '_');
  };
  
  useEffect(() => {
    if (!id) {
      setError('No country specified');
      setLoading(false);
      return;
    }
    
    // Find the country by ID
    const foundCountry = europeanCountries.find(c => c.id === id);
    
    if (!foundCountry) {
      setError('Country not found');
      setLoading(false);
      return;
    }
    
    setCountry(foundCountry);
    
    // Find neighbor countries
    const neighborCountries = europeanCountries.filter(
      c => foundCountry.neighbors.includes(c.id)
    );
    
    setNeighbors(neighborCountries);
    setLoading(false);
  }, [id]);
  
  if (loading) {
    return <PageContainer>{t('common.loading')}</PageContainer>;
  }
  
  if (error || !country) {
    return (
      <PageContainer>
        <BackButton to="/countries">← {t('common.back')}</BackButton>
        <ErrorMessage>
          <h2>{error || t('common.error')}</h2>
          <p>{t('countries.tryAdjusting')}</p>
        </ErrorMessage>
      </PageContainer>
    );
  }
  
  return (
    <PageContainer>
      <BackButton to="/countries">← {t('common.back')}</BackButton>
      
      <CountryHeader>
        <CountryFlag>{country.flag}</CountryFlag>
        <CountryName>{t(`countryNames.${country.id}`)}</CountryName>
        <CountrySubtitle>
          {t('countries.capital')}: {t(`capitalNames.${getCapitalId(country.capital)}`, country.capital)} | {t('countries.region')}: {t(`regions.${country.region}`)}
        </CountrySubtitle>
      </CountryHeader>
      
      <Grid>
        <DetailCard>
          <DetailSection>
            <SectionTitle>{t('country.about')}</SectionTitle>
            <p>{country.descriptionKey ? t(country.descriptionKey) : country.description}</p>
          </DetailSection>
          
          <DetailSection>
            <SectionTitle>{t('country.interestingFacts')}</SectionTitle>
            <FactsList>
              {country.facts.map((fact, index) => (
                <FactItem key={index}>
                  {country.factKeys && country.factKeys[index] 
                    ? t(country.factKeys[index]) 
                    : fact}
                </FactItem>
              ))}
            </FactsList>
          </DetailSection>
        </DetailCard>
        
        <div>
          <DetailCard>
            <DetailSection>
              <SectionTitle>{t('country.location')}</SectionTitle>
              <InfoItem>
                <InfoLabel>{t('countries.region')}:</InfoLabel> {t(`regions.${country.region}`)}
              </InfoItem>
              <InfoItem>
                <InfoLabel>{t('country.coordinates')}:</InfoLabel> 
                {country.coordinates[0]}° N, {country.coordinates[1]}° E
              </InfoItem>
            </DetailSection>
          </DetailCard>
          
          {neighbors.length > 0 && (
            <DetailCard>
              <DetailSection>
                <SectionTitle>{t('country.neighboringCountries')}</SectionTitle>
                <NeighborGrid>
                  {neighbors.map(neighbor => (
                    <NeighborCard key={neighbor.id} to={`/countries/${neighbor.id}`}>
                      <NeighborFlag>{neighbor.flag}</NeighborFlag>
                      <NeighborName>{t(`countryNames.${neighbor.id}`)}</NeighborName>
                    </NeighborCard>
                  ))}
                </NeighborGrid>
              </DetailSection>
            </DetailCard>
          )}
        </div>
      </Grid>
    </PageContainer>
  );
};

export default CountryDetail; 