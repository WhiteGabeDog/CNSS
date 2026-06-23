import type { Plaster } from '../types';

export const plasters: Plaster[] = [
  {
    key: 'normal',
    name: 'Normal Plaster',
    tagline: 'For clean, superficial wounds',
    description:
      'A standard adhesive plaster designed for minor cuts, abrasions, and superficial flesh wounds. Provides a protective barrier against contaminants while the skin heals naturally.',
    indications: [
      'Superficial cuts and scrapes',
      'Minor flesh wounds with no infection',
      'Clean wounds with minimal exudate',
      'Post-healing protective cover',
    ],
    color: 'bg-blue-50 border-blue-200',
    badgeColor: 'bg-blue-100 text-blue-800',
    icon: '🩹',
  },
  {
    key: 'infected',
    name: 'Antimicrobial Plaster',
    tagline: 'For infected or contaminated wounds',
    description:
      'An advanced plaster infused with antimicrobial agents to reduce bacterial load and prevent further infection. Designed for wounds showing signs of infection such as redness, warmth, swelling, or discharge.',
    indications: [
      'Wounds with redness, swelling, or warmth',
      'Wounds with pus or cloudy discharge',
      'Contaminated or dirty wounds',
      'Wounds that are slow to heal or worsening',
    ],
    color: 'bg-red-50 border-red-200',
    badgeColor: 'bg-red-100 text-red-800',
    icon: '🔬',
  },
  {
    key: 'burn',
    name: 'Burn Plaster',
    tagline: 'For burn wounds and thermal injuries',
    description:
      'A non-adherent, gel-based plaster specially formulated for burn injuries. Provides a moist healing environment, reduces pain on removal, and protects delicate burned tissue from infection.',
    indications: [
      'First-degree (superficial) burns',
      'Second-degree (partial thickness) burns',
      'Sunburn with broken skin',
      'Thermal or chemical skin injuries',
    ],
    color: 'bg-orange-50 border-orange-200',
    badgeColor: 'bg-orange-100 text-orange-800',
    icon: '🔥',
  },
  {
    key: 'scar',
    name: 'Scar Treatment Plaster',
    tagline: 'For scar reduction and skin regeneration',
    description:
      'A silicone-based scar plaster designed for use once the wound has fully closed. Helps flatten, soften, and fade scars over time by maintaining optimal hydration of the scar tissue.',
    indications: [
      'Healed surgical scars',
      'Hypertrophic or raised scars',
      'Post-wound scar management',
      'Keloid prevention after closure',
    ],
    color: 'bg-purple-50 border-purple-200',
    badgeColor: 'bg-purple-100 text-purple-800',
    icon: '✨',
  },
];
