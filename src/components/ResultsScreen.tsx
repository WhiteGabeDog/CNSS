import type { PlasterResult } from '../types';
import ResultCard from './ResultCard';

interface Props {
  results: PlasterResult[];
  recommendedSize: string | null;
  purulentLevel: string | null;
  onRestart: () => void;
}

export default function ResultsScreen({ results, recommendedSize, purulentLevel, onRestart }: Props) {
  const topMatch = results[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <div className="bg-green-500 rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
              <span className="text-2xl">✅</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Assessment Complete</h1>
          <p className="text-gray-600 text-sm">
            Based on your answers, we recommend:
          </p>
        </div>

        {/* Top recommendation highlight */}
        <div className="bg-white rounded-2xl shadow-md px-5 py-4 mb-4 flex items-center gap-4 border-2 border-blue-200">
          <span className="text-4xl">{topMatch.plaster.icon}</span>
          <div>
            <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
              Primary Recommendation
            </p>
            <p className="text-xl font-bold text-gray-900">{topMatch.plaster.name}</p>
            <p className="text-gray-500 text-sm">{topMatch.plaster.tagline}</p>
          </div>
        </div>

        {/* Wound size & purulent grading cards */}
        {(recommendedSize || purulentLevel) && (
          <div className="grid grid-cols-1 gap-3 mb-4 sm:grid-cols-2">
            {recommendedSize && (
              <div className="bg-white rounded-2xl border-2 border-teal-200 px-4 py-4 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">📏</span>
                  <p className="text-xs font-semibold text-teal-700 uppercase tracking-wider">
                    Plaster Size
                  </p>
                </div>
                <p className="text-sm font-bold text-gray-900 leading-snug">{recommendedSize}</p>
                <p className="text-xs text-gray-500 mt-1">Based on wound dimensions</p>
              </div>
            )}
            {purulentLevel && (
              <div className={`rounded-2xl border-2 px-4 py-4 shadow-sm ${
                purulentLevel.startsWith('None')
                  ? 'bg-green-50 border-green-200'
                  : purulentLevel.startsWith('Mild')
                  ? 'bg-yellow-50 border-yellow-200'
                  : purulentLevel.startsWith('Moderate')
                  ? 'bg-orange-50 border-orange-200'
                  : 'bg-red-50 border-red-200'
              }`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">🔬</span>
                  <p className={`text-xs font-semibold uppercase tracking-wider ${
                    purulentLevel.startsWith('None')
                      ? 'text-green-700'
                      : purulentLevel.startsWith('Mild')
                      ? 'text-yellow-700'
                      : purulentLevel.startsWith('Moderate')
                      ? 'text-orange-700'
                      : 'text-red-700'
                  }`}>
                    Purulent Level
                  </p>
                </div>
                <p className="text-sm font-bold text-gray-900 leading-snug">{purulentLevel}</p>
                <p className="text-xs text-gray-500 mt-1">Exudate / discharge assessment</p>
              </div>
            )}
          </div>
        )}

        {/* All ranked results */}
        <div className="space-y-3 mb-6">
          {results.map((result, index) => (
            <ResultCard
              key={result.plaster.key}
              result={result}
              rank={index + 1}
              isTopMatch={index === 0}
            />
          ))}
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
          <p className="text-amber-800 text-xs leading-relaxed">
            <strong>⚠ Clinical Notice:</strong> These recommendations are for guidance
            only. For deep wounds, severe burns, suspected serious infection, or wounds
            that are not improving, please consult a qualified healthcare professional
            immediately.
          </p>
        </div>

        {/* Restart */}
        <button
          onClick={onRestart}
          className="w-full py-4 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors duration-200"
        >
          ↺ Start New Assessment
        </button>
      </div>
    </div>
  );
}
