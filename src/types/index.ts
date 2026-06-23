export type PlasterKey = 'normal' | 'infected' | 'burn' | 'scar';

export interface ScoreMap {
  normal: number;
  infected: number;
  burn: number;
  scar: number;
}

export interface Answer {
  id: string;
  text: string;
  scores: ScoreMap;
  /** Present only on wound-size question answers; drives the plaster size recommendation. */
  sizeLabel?: string;
  /** Present only on purulent-quantity answers; drives the exudate level label on results. */
  purulentLabel?: string;
}

export interface Question {
  id: string;
  text: string;
  description?: string;
  answers: Answer[];
}

export interface Plaster {
  key: PlasterKey;
  name: string;
  tagline: string;
  description: string;
  indications: string[];
  color: string; // Tailwind background color class
  badgeColor: string; // Tailwind badge color class
  icon: string; // emoji
}

export interface PlasterResult {
  plaster: Plaster;
  score: number;
  percentage: number;
}

export interface RankingResult {
  rankedPlasters: PlasterResult[];
  /** Recommended plaster size derived from wound-size question, e.g. "Standard Plaster (1–3 cm)". */
  recommendedSize: string | null;
  /** Exudate/purulent level label, e.g. "Moderate — yellow/green discharge". */
  purulentLevel: string | null;
}
