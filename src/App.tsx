import { useState } from 'react';
import type { Answer, PlasterResult } from './types';
import { questions } from './data/questions';
import { rankPlasters } from './utils/scorer';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionCard from './components/QuestionCard';
import ResultsScreen from './components/ResultsScreen';

type Screen = 'welcome' | 'questions' | 'results';

interface AnswerState {
  answerId: string;
  scores: import('./types').ScoreMap;
  sizeLabel?: string;
  purulentLabel?: string;
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});
  const [results, setResults] = useState<PlasterResult[]>([]);
  const [recommendedSize, setRecommendedSize] = useState<string | null>(null);
  const [purulentLevel, setPurulentLevel] = useState<string | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestion?.id] ?? null;

  function handleStart() {
    setScreen('questions');
  }

  function handleSelectAnswer(answer: Answer) {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        answerId: answer.id,
        scores: answer.scores,
        sizeLabel: answer.sizeLabel,
        purulentLabel: answer.purulentLabel,
      },
    }));
  }

  function handleNext() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((i) => i + 1);
    } else {
      const allAnswers = Object.values(answers).map((a) => ({
        scores: a.scores,
        sizeLabel: a.sizeLabel,
        purulentLabel: a.purulentLabel,
      }));
      const { rankedPlasters, recommendedSize: size, purulentLevel: pLevel } = rankPlasters(allAnswers);
      setResults(rankedPlasters);
      setRecommendedSize(size);
      setPurulentLevel(pLevel);
      setScreen('results');
    }
  }

  function handleBack() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((i) => i - 1);
    }
  }

  function handleRestart() {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setResults([]);
    setRecommendedSize(null);
    setPurulentLevel(null);
    setScreen('welcome');
  }

  if (screen === 'welcome') {
    return <WelcomeScreen onStart={handleStart} />;
  }

  if (screen === 'results') {
    return <ResultsScreen results={results} recommendedSize={recommendedSize} purulentLevel={purulentLevel} onRestart={handleRestart} />;
  }

  return (
    <QuestionCard
      question={currentQuestion}
      questionIndex={currentQuestionIndex}
      totalQuestions={questions.length}
      selectedAnswerId={selectedAnswer?.answerId ?? null}
      onSelectAnswer={handleSelectAnswer}
      onNext={handleNext}
      onBack={handleBack}
      isFirst={currentQuestionIndex === 0}
      isLast={currentQuestionIndex === questions.length - 1}
    />
  );
}
