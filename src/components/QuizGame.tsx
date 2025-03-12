import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import type { Country } from '../data/europeanCountries';
// Material UI imports
import { 
  Box, 
  Typography, 
  Paper, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  Avatar, 
  styled,
  Container
} from '@mui/material';
import { green, red } from '@mui/material/colors';

interface QuizGameProps {
  countries: Country[];
  questionType: 'capitals' | 'flags';
}

interface Question {
  question: string;
  correctAnswer: string;
  options: string[];
  countryId: string;
}

// Custom styled components using Material UI styled API
const QuestionAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: 40,
  height: 40,
  marginRight: theme.spacing(2)
}));

const FlagContainer = styled(Box)(({ theme }) => ({
  fontSize: '4rem',
  lineHeight: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 80,
  marginRight: theme.spacing(2)
}));

const StopwatchCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  backgroundColor: theme.palette.grey[100]
}));

const OptionButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'correct' && prop !== 'incorrect' && prop !== 'selected'
})<{ correct?: boolean; incorrect?: boolean; selected?: boolean }>(({ theme, correct, incorrect, selected }) => ({
  padding: theme.spacing(2),
  textAlign: 'left',
  justifyContent: 'flex-start',
  textTransform: 'none',
  borderRadius: theme.shape.borderRadius,
  fontSize: '1rem',
  border: '2px solid',
  width: '100%',
  borderColor: correct ? green[500] : incorrect ? red[500] : selected ? theme.palette.primary.main : theme.palette.divider,
  backgroundColor: correct ? green[50] : incorrect ? red[50] : selected ? theme.palette.primary[50] : 'white',
  '&:hover': {
    backgroundColor: correct ? green[50] : incorrect ? red[50] : theme.palette.primary[50],
    borderColor: correct ? green[500] : incorrect ? red[500] : theme.palette.primary.main
  },
  '&.Mui-disabled': {
    opacity: correct || incorrect ? 1 : 0.6,
    color: theme.palette.text.primary
  }
}));

const QuizGame = ({ countries, questionType }: QuizGameProps) => {
  const { t } = useTranslation();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [totalQuizTime, setTotalQuizTime] = useState(0); // Total time in seconds
  const stopwatchRef = useRef<NodeJS.Timeout | null>(null);
  
  // Generate questions on initial load
  useEffect(() => {
    generateQuestions();
    
    // Clean up any existing intervals when component unmounts
    return () => {
      if (stopwatchRef.current) {
        clearInterval(stopwatchRef.current);
        stopwatchRef.current = null;
      }
    };
  }, [questionType]); // Only regenerate questions when question type changes
  
  // Start stopwatch as a separate effect to avoid multiple timers
  useEffect(() => {
    // Clear any existing interval first
    if (stopwatchRef.current) {
      clearInterval(stopwatchRef.current);
      stopwatchRef.current = null;
    }
    
    // Only start the stopwatch if questions are loaded and quiz is not complete
    if (questions.length > 0 && !quizComplete) {
      stopwatchRef.current = setInterval(() => {
        setTotalQuizTime(prev => prev + 1);
      }, 1000);
    }
    
    // Cleanup function
    return () => {
      if (stopwatchRef.current) {
        clearInterval(stopwatchRef.current);
        stopwatchRef.current = null;
      }
    };
  }, [questions.length, quizComplete]); // Only re-run when questions load or quiz completes
  
  // Effect to stop the stopwatch when quiz is complete
  useEffect(() => {
    if (quizComplete && stopwatchRef.current) {
      clearInterval(stopwatchRef.current);
      stopwatchRef.current = null;
    }
  }, [quizComplete]);
  
  const formatTime = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  const generateQuestions = () => {
    if (countries.length < 4) return;
    
    // Stop any existing stopwatch
    if (stopwatchRef.current) {
      clearInterval(stopwatchRef.current);
      stopwatchRef.current = null;
    }
    
    // Shuffle countries and take 10 for the quiz
    const shuffledCountries = [...countries].sort(() => 0.5 - Math.random()).slice(0, 10);
    
    const generatedQuestions: Question[] = shuffledCountries.map(country => {
      let question = '';
      let correctAnswer = '';
      
      // Generate different question types
      switch (questionType) {
        case 'capitals':
          question = t('quiz.capitalQuestion', { country: t(`countryNames.${country.id}`) });
          correctAnswer = t(`capitalNames.${getCapitalId(country.capital)}`);
          break;
        case 'flags':
          question = t('quiz.flagQuestion', { flag: '' }); // Remove flag from translation
          correctAnswer = t(`countryNames.${country.id}`);
          break;
      }
      
      // Generate options (1 correct, 3 incorrect)
      let options: string[] = [correctAnswer];
      
      // Add incorrect options
      const incorrectCountries = countries.filter(c => c.id !== country.id);
      const getIncorrectOption = () => {
        const randomCountry = incorrectCountries[Math.floor(Math.random() * incorrectCountries.length)];
        
        let option = '';
        switch (questionType) {
          case 'capitals':
            option = t(`capitalNames.${getCapitalId(randomCountry.capital)}`);
            break;
          case 'flags':
            option = t(`countryNames.${randomCountry.id}`);
            break;
        }
        
        return option;
      };
      
      // Make sure we don't have duplicate options
      while (options.length < 4) {
        const option = getIncorrectOption();
        if (!options.includes(option)) {
          options.push(option);
        }
      }
      
      // Shuffle options
      options = options.sort(() => 0.5 - Math.random());
      
      return {
        question,
        correctAnswer,
        options,
        countryId: country.id
      };
    });
    
    setQuestions(generatedQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setQuizComplete(false);
    setTotalQuizTime(0); // Reset stopwatch
  };

  const getCapitalId = (capitalName: string) => {
    return capitalName.toLowerCase().replace(/\s+/g, '_');
  };
  
  const handleAnswerSelect = (answer: string) => {
    if (showAnswer || selectedAnswer) return;
    
    setSelectedAnswer(answer);
    setShowAnswer(true);
    
    // Update score if correct
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    } else {
      setQuizComplete(true);
    }
  };
  
  const restartQuiz = () => {
    generateQuestions();
  };
  
  if (questions.length === 0) {
    return (
      <Paper elevation={3} sx={{ maxWidth: 800, margin: '0 auto', padding: 4 }}>
        <Typography>{t('common.loading')}...</Typography>
      </Paper>
    );
  }
  
  if (quizComplete) {
    const scorePercentage = (score / questions.length) * 100;
    let feedbackMessage = '';
    
    if (scorePercentage >= 90) {
      feedbackMessage = t('quiz.feedbackExcellent');
    } else if (scorePercentage >= 70) {
      feedbackMessage = t('quiz.feedbackGreat');
    } else if (scorePercentage >= 50) {
      feedbackMessage = t('quiz.feedbackGood');
    } else {
      feedbackMessage = t('quiz.feedbackNeedsWork');
    }
    
    return (
      <Paper elevation={3} sx={{ maxWidth: 800, margin: '0 auto', padding: 4 }}>
        <Box sx={{ textAlign: 'center', padding: 3 }}>
          <Typography variant="h4" color="primary" gutterBottom>
            {t('quiz.quizComplete')}
          </Typography>
          
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            {score} / {questions.length}
          </Typography>
          
          <Typography variant="h6" paragraph>
            {feedbackMessage}
          </Typography>
          
          <Card variant="outlined" sx={{ bgcolor: 'grey.100', margin: '16px 0', textAlign: 'left' }}>
            <CardContent>
              <Typography variant="body1" gutterBottom>
                <Box component="span" fontWeight="bold">{t('quiz.totalTime')}: </Box>
                {formatTime(totalQuizTime)}
              </Typography>
              <Typography variant="body1">
                <Box component="span" fontWeight="bold">{t('quiz.averageTimePerQuestion')}: </Box>
                {formatTime(Math.floor(totalQuizTime / questions.length))}
              </Typography>
            </CardContent>
          </Card>
          
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            onClick={restartQuiz}
            sx={{ padding: '12px 24px', fontSize: '1.1rem' }}
          >
            {t('quiz.takeAnotherQuiz')}
          </Button>
        </Box>
      </Paper>
    );
  }
  
  const currentQ = questions[currentQuestion];
  
  return (
    <Paper elevation={3} sx={{ maxWidth: 800, margin: '0 auto', padding: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
        <QuestionAvatar>{currentQuestion + 1}</QuestionAvatar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {questionType === 'flags' && (
            <FlagContainer>
              {countries.find(c => c.id === currentQ.countryId)?.flag}
            </FlagContainer>
          )}
          <Typography variant="h5">
            {currentQ.question}
          </Typography>
        </Box>
      </Box>
      
      <StopwatchCard variant="outlined">
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px !important' }}>
          <Typography variant="subtitle1" fontWeight={500}>
            {t('quiz.elapsedTime')}: 
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold" color="primary">
            {formatTime(totalQuizTime)}
          </Typography>
        </CardContent>
      </StopwatchCard>
      
      <Grid container spacing={2} sx={{ marginBottom: 3 }}>
        {currentQ.options.map((option, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <OptionButton
              variant="outlined"
              disabled={showAnswer}
              selected={option === selectedAnswer}
              correct={showAnswer && option === currentQ.correctAnswer}
              incorrect={showAnswer && option === selectedAnswer && option !== currentQ.correctAnswer}
              onClick={() => handleAnswerSelect(option)}
            >
              {option}
            </OptionButton>
          </Grid>
        ))}
      </Grid>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="subtitle1" fontWeight={500}>
          {t('quiz.score')}: {score}/{currentQuestion + 1}
        </Typography>
        {showAnswer && (
          <Button 
            variant="contained" 
            color="primary"
            onClick={handleNextQuestion}
          >
            {currentQuestion < questions.length - 1 ? t('quiz.nextQuestion') : t('quiz.seeResults')}
          </Button>
        )}
      </Box>
    </Paper>
  );
};

export default QuizGame; 