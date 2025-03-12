import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  color: var(--primary-color);
  margin: 0 0 1rem;
`;

const ErrorTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const HomeLink = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border-radius: var(--border-radius);
  font-size: 1.1rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #003d87;
    color: white;
  }
`;

const NotFound = () => {
  return (
    <PageContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorTitle>Page Not Found</ErrorTitle>
      <ErrorMessage>
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </ErrorMessage>
      <HomeLink to="/">Return to Homepage</HomeLink>
    </PageContainer>
  );
};

export default NotFound; 