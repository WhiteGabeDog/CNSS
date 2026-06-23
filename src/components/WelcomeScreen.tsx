interface Props {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 text-center">
        {/* Logo / Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
            <span className="text-4xl">🩹</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Wound Plaster Advisor
        </h1>
        <p className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-6">
          Pharmaceutical Assessment Tool
        </p>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4">
          Answer a short series of clinical questions about the wound condition to
          receive a ranked recommendation of the most suitable plaster type.
        </p>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          This tool covers <strong>4 plaster types</strong>: Normal, Antimicrobial
          (Infected), Burn, and Scar Treatment. Results are ranked by suitability based
          on your answers.
        </p>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-8 text-left">
          <p className="text-amber-800 text-xs leading-relaxed">
            <strong>⚠ Clinical Notice:</strong> This tool is a decision-support aid only
            and does not replace professional medical advice. Always consult a healthcare
            professional for serious wounds.
          </p>
        </div>

        {/* Start Button */}
        <button
          onClick={onStart}
          className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-lg py-4 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Start Assessment
        </button>

        <p className="text-gray-400 text-xs mt-4">7 questions · ~2 minutes</p>
      </div>
    </div>
  );
}
