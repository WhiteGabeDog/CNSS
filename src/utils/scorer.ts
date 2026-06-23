import type { PlasterKey, PlasterResult, RankingResult, ScoreMap } from '../types';
import { plasters } from '../data/plasters';

interface ScoredAnswer {
  scores: ScoreMap;
  sizeLabel?: string;
  purulentLabel?: string;
}

/**
 * Given a list of selected answer payloads, accumulate total scores per plaster,
 * extract the wound size and purulent level labels, and return all 4 plasters
 * sorted from highest to lowest match score.
 */
export function rankPlasters(selectedAnswers: ScoredAnswer[]): RankingResult {
  const totals: Record<PlasterKey, number> = {
    normal: 0,
    infected: 0,
    burn: 0,
    scar: 0,
  };

  let recommendedSize: string | null = null;
  let purulentLevel: string | null = null;

  for (const answer of selectedAnswers) {
    totals.normal += answer.scores.normal;
    totals.infected += answer.scores.infected;
    totals.burn += answer.scores.burn;
    totals.scar += answer.scores.scar;
    if (answer.sizeLabel) recommendedSize = answer.sizeLabel;
    if (answer.purulentLabel) purulentLevel = answer.purulentLabel;
  }

  const maxScore = Math.max(...Object.values(totals));

  const rankedPlasters: PlasterResult[] = plasters
    .map((plaster) => ({
      plaster,
      score: totals[plaster.key],
      percentage: maxScore > 0 ? Math.round((totals[plaster.key] / maxScore) * 100) : 0,
    }))
    .sort((a, b) => b.score - a.score);

  return { rankedPlasters, recommendedSize, purulentLevel };
}
