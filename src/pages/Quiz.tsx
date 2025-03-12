import { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import QuizGame from '../components/QuizGame';
import europeanCountries from '../data/europeanCountries';

type QuizType = 'capitals' | 'flags' | 'locations';

const PageContainer = styled.div`
  padding: 2rem 0;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-color);
`;

const QuizTypeSelect = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const QuizTypeButton = styled.button<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 2px solid ${props => props.active ? 'var(--primary-color)' : 'var(--border-color)'};
  background-color: ${props => props.active ? 'rgba(0, 82, 180, 0.1)' : 'white'};
  border-radius: var(--border-radius);
  min-width: 150px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--box-shadow);
  }
`;

const QuizTypeIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const QuizTypeName = styled.div`
  font-weight: 500;
`;

const QuizIntro = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
  padding: 2rem;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

const TimerInfo = styled.div`
  background-color: var(--secondary-color);
  padding: 0.75rem;
  border-radius: var(--border-radius);
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TimerIcon = styled.span`
  font-size: 1.2rem;
`;

const StartButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #003d87;
  }
`;

const Quiz = () => {
  const { t } = useTranslation();
  const [quizType, setQuizType] = useState<QuizType>('capitals');
  const [quizStarted, setQuizStarted] = useState(false);
  
  const quizTypes: Array<{ id: QuizType; name: string; icon: string; description: string }> = [
    {
      id: 'capitals',
      name: t('quiz.types.capitals.name'),
      icon: '🏛️',
      description: t('quiz.types.capitals.description')
    },
    {
      id: 'flags',
      name: t('quiz.types.flags.name'),
      icon: '🚩',
      description: t('quiz.types.flags.description')
    },
    {
      id: 'locations',
      name: t('quiz.types.locations.name'),
      icon: '🗺️',
      description: t('quiz.types.locations.description')
    }
  ];
  
  const handleStartQuiz = () => {
    setQuizStarted(true);
  };
  
  const activeQuizType = quizTypes.find(type => type.id === quizType) || quizTypes[0];
  
  return (
    <PageContainer>
      <PageTitle>{t('quiz.title')}</PageTitle>
      
      {!quizStarted ? (
        <>
          <QuizTypeSelect>
            {quizTypes.map(type => (
              <QuizTypeButton 
                key={type.id}
                active={quizType === type.id}
                onClick={() => setQuizType(type.id)}
              >
                <QuizTypeIcon>{type.icon}</QuizTypeIcon>
                <QuizTypeName>{type.name}</QuizTypeName>
              </QuizTypeButton>
            ))}
          </QuizTypeSelect>
          
          <QuizIntro>
            <h2>{activeQuizType.name}</h2>
            <p>{activeQuizType.description}</p>
            <p>{t('quiz.questions')}</p>
            <TimerInfo>
              <TimerIcon>⏱️</TimerIcon>
              <span>{t('quiz.stopwatchInfo')}</span>
            </TimerInfo>
            <StartButton onClick={handleStartQuiz}>{t('common.startQuiz')}</StartButton>
          </QuizIntro>
        </>
      ) : (
        <QuizGame countries={europeanCountries} questionType={quizType} />
      )}
    </PageContainer>
  );
};

export default Quiz; 