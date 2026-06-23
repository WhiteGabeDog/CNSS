import type { Question } from '../types';

export const questions: Question[] = [
  {
    id: 'q1',
    text: 'Is there an open wound or broken skin?',
    description: 'Select the option that best describes the current wound status.',
    answers: [
      {
        id: 'q1a1',
        text: 'Yes — there is an open wound or broken skin',
        scores: { normal: 3, infected: 2, burn: 1, scar: 0 },
      },
      {
        id: 'q1a2',
        text: 'No — the wound is fully closed / healed',
        scores: { normal: 0, infected: 0, burn: 0, scar: 5 },
      },
      {
        id: 'q1a3',
        text: 'Partially — skin is still fragile / newly healed',
        scores: { normal: 1, infected: 0, burn: 0, scar: 3 },
      },
    ],
  },
  {
    id: 'q2',
    text: 'Is the wound caused by heat or burning?',
    description: 'This includes fire, hot liquids, steam, sunburn, or chemical burns.',
    answers: [
      {
        id: 'q2a1',
        text: 'Yes — it is a burn or thermal/chemical injury',
        scores: { normal: 0, infected: 0, burn: 6, scar: 0 },
      },
      {
        id: 'q2a2',
        text: 'No — it is not a burn',
        scores: { normal: 2, infected: 1, burn: 0, scar: 1 },
      },
      {
        id: 'q2a3',
        text: 'Unsure',
        scores: { normal: 1, infected: 0, burn: 2, scar: 0 },
      },
    ],
  },
  {
    id: 'q3',
    text: 'Are there signs of infection?',
    description:
      'Signs include increasing redness, warmth, swelling, pus or cloudy discharge, or a foul odour.',
    answers: [
      {
        id: 'q3a1',
        text: 'Yes — there are clear signs of infection',
        scores: { normal: 0, infected: 7, burn: 0, scar: 0 },
      },
      {
        id: 'q3a2',
        text: 'Possibly — mild redness or slight discharge',
        scores: { normal: 1, infected: 4, burn: 0, scar: 0 },
      },
      {
        id: 'q3a3',
        text: 'No — the wound appears clean',
        scores: { normal: 3, infected: 0, burn: 1, scar: 1 },
      },
    ],
  },
  {
    id: 'q4',
    text: 'Is there active bleeding?',
    description: 'This refers to ongoing or recent bleeding from the wound.',
    answers: [
      {
        id: 'q4a1',
        text: 'Yes — there is significant active bleeding',
        scores: { normal: 3, infected: 1, burn: 1, scar: 0 },
      },
      {
        id: 'q4a2',
        text: 'Minimal — slight oozing only',
        scores: { normal: 2, infected: 2, burn: 1, scar: 0 },
      },
      {
        id: 'q4a3',
        text: 'No — bleeding has stopped',
        scores: { normal: 1, infected: 1, burn: 2, scar: 2 },
      },
    ],
  },
  {
    id: 'q5',
    text: 'How deep does the wound appear?',
    description: 'Estimate the depth as best as possible.',
    answers: [
      {
        id: 'q5a1',
        text: 'Superficial — only affects the top layer of skin',
        scores: { normal: 4, infected: 1, burn: 2, scar: 1 },
      },
      {
        id: 'q5a2',
        text: 'Moderate — goes into the skin but not deep tissue',
        scores: { normal: 2, infected: 3, burn: 2, scar: 0 },
      },
      {
        id: 'q5a3',
        text: 'Deep — may involve fat or muscle',
        scores: { normal: 1, infected: 3, burn: 1, scar: 0 },
      },
    ],
  },
  {
    id: 'q6',
    text: 'Is the wound clean or contaminated?',
    description: 'Consider whether the wound came into contact with dirt, foreign objects, or unclean surfaces.',
    answers: [
      {
        id: 'q6a1',
        text: 'Clean — not exposed to dirt or contaminants',
        scores: { normal: 4, infected: 0, burn: 2, scar: 1 },
      },
      {
        id: 'q6a2',
        text: 'Possibly contaminated — may have been exposed',
        scores: { normal: 1, infected: 4, burn: 0, scar: 0 },
      },
      {
        id: 'q6a3',
        text: 'Contaminated — definitely dirty or foreign material present',
        scores: { normal: 0, infected: 6, burn: 0, scar: 0 },
      },
    ],
  },
  {
    id: 'q7',
    text: 'Is there a visible scar remaining from a previous wound?',
    description: 'This refers to a healed wound that has left a scar, not an active wound.',
    answers: [
      {
        id: 'q7a1',
        text: 'Yes — there is a raised, discoloured, or prominent scar',
        scores: { normal: 0, infected: 0, burn: 0, scar: 6 },
      },
      {
        id: 'q7a2',
        text: 'Mild — there is a faint scar or mark',
        scores: { normal: 1, infected: 0, burn: 0, scar: 3 },
      },
      {
        id: 'q7a3',
        text: 'No — no visible scar',
        scores: { normal: 2, infected: 1, burn: 1, scar: 0 },
      },
    ],
  },
  {
    id: 'q8',
    text: 'What is the approximate size of the wound?',
    description:
      'Estimate the longest dimension of the wound. This helps match the correct plaster size.',
    answers: [
      {
        id: 'q8a1',
        text: 'Tiny — less than 1 cm (pinprick, small cut)',
        scores: { normal: 2, infected: 0, burn: 1, scar: 1 },
        sizeLabel: 'Mini / Spot Plaster  (< 1 cm)',
      },
      {
        id: 'q8a2',
        text: 'Small — 1 to 3 cm',
        scores: { normal: 3, infected: 1, burn: 1, scar: 1 },
        sizeLabel: 'Standard Plaster  (1–3 cm)',
      },
      {
        id: 'q8a3',
        text: 'Medium — 3 to 6 cm',
        scores: { normal: 1, infected: 2, burn: 2, scar: 0 },
        sizeLabel: 'Large Plaster / Wound Strip  (3–6 cm)',
      },
      {
        id: 'q8a4',
        text: 'Large — more than 6 cm',
        scores: { normal: 0, infected: 2, burn: 3, scar: 0 },
        sizeLabel: 'Wound Dressing Pad  (> 6 cm) — consider professional care',
      },
    ],
  },
  {
    id: 'q9',
    text: 'How much pus or discharge is present?',
    description:
      'Purulent discharge (pus) is a key indicator of infection severity and affects which plaster is most appropriate.',
    answers: [
      {
        id: 'q9a1',
        text: 'None — wound appears clean and dry',
        scores: { normal: 3, infected: 0, burn: 2, scar: 2 },
        purulentLabel: 'None — clean wound',
      },
      {
        id: 'q9a2',
        text: 'Mild — small amount of clear or slightly cloudy fluid',
        scores: { normal: 1, infected: 3, burn: 1, scar: 0 },
        purulentLabel: 'Mild — clear / slightly cloudy exudate',
      },
      {
        id: 'q9a3',
        text: 'Moderate — noticeable yellow or green discharge',
        scores: { normal: 0, infected: 6, burn: 0, scar: 0 },
        purulentLabel: 'Moderate — yellow / green purulent discharge',
      },
      {
        id: 'q9a4',
        text: 'Heavy — large amount of pus present',
        scores: { normal: 0, infected: 8, burn: 0, scar: 0 },
        purulentLabel: 'Heavy — profuse purulent discharge (seek medical attention)',
      },
    ],
  },
];
