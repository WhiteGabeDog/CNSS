import type { PlasterResult } from '../types';

interface Props {
  result: PlasterResult;
  rank: number;
  isTopMatch: boolean;
}

export default function ResultCard({ result, rank, isTopMatch }: Props) {
  const { plaster, percentage } = result;

  return (
    <div
      className={`rounded-2xl border-2 p-5 transition-all ${
        isTopMatch
          ? `${plaster.color} shadow-lg scale-100`
          : 'bg-white border-gray-200 shadow-sm'
      }`}
    >
      {/* Rank & badge */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{plaster.icon}</span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className={`font-bold text-lg ${isTopMatch ? 'text-gray-900' : 'text-gray-800'}`}>
                {plaster.name}
              </h3>
              {isTopMatch && (
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${plaster.badgeColor}`}>
                  Best Match
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500">{plaster.tagline}</p>
          </div>
        </div>
        <div className="text-right flex-shrink-0 ml-2">
          <div className={`text-2xl font-black ${isTopMatch ? 'text-blue-700' : 'text-gray-400'}`}>
            #{rank}
          </div>
        </div>
      </div>

      {/* Match percentage bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Suitability score</span>
          <span className="font-semibold">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-700 ${
              isTopMatch ? 'bg-blue-600' : 'bg-gray-400'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Description (only shown for top match) */}
      {isTopMatch && (
        <>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">{plaster.description}</p>
          <div>
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
              Indicated for:
            </p>
            <ul className="space-y-1">
              {plaster.indications.map((ind) => (
                <li key={ind} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  {ind}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
