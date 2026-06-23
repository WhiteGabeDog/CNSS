import type { Question, Answer } from '../types';
import ProgressBar from './ProgressBar';

interface Props {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  selectedAnswerId: string | null;
  onSelectAnswer: (answer: Answer) => void;
  onNext: () => void;
  onBack: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function QuestionCard({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswerId,
  onSelectAnswer,
  onNext,
  onBack,
  isFirst,
  isLast,
}: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
              {questionIndex + 1}
            </div>
            <ProgressBar current={questionIndex + 1} total={totalQuestions} />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mt-4">{question.text}</h2>
          {question.description && (
            <p className="text-gray-500 text-sm mt-1 leading-relaxed">{question.description}</p>
          )}
        </div>

        {/* Answer Options */}
        <div className="space-y-3 mb-8">
          {question.answers.map((answer) => {
            const isSelected = selectedAnswerId === answer.id;
            return (
              <button
                key={answer.id}
                onClick={() => onSelectAnswer(answer)}
                className={`w-full text-left px-4 py-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50 text-blue-900'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Radio indicator */}
                  <div
                    className={`mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                      isSelected ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                    }`}
                  >
                    {isSelected && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span className="font-medium leading-snug">{answer.text}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          {!isFirst && (
            <button
              onClick={onBack}
              className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:border-gray-300 hover:bg-gray-50 transition-colors duration-200"
            >
              ← Back
            </button>
          )}
          <button
            onClick={onNext}
            disabled={!selectedAnswerId}
            className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-200 ${
              selectedAnswerId
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isLast ? 'See Results →' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
}
