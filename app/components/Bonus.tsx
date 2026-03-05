'use client';

export default function Bonus() {
  return (
    <>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .shake-button {
          animation: shake 0.5s infinite;
        }
      `}</style>
      <div className="bg-gradient-to-r from-indigo-950 to-indigo-900 rounded-lg p-8 text-white relative overflow-hidden">
        {/* Limited Time Badge */}
        <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded text-xs font-bold">
          Limited Time
        </div>

        {/* Main Content */}
        <div className="max-w-2xl">
          {/* Header */}
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
            <span className="text-2xl">🎁</span>
            Win N20,000 — Bonus Offer
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-100 mb-4">
            Be among the first 20 people to get <span className="font-bold text-yellow-300">N20,000</span> startup capital.
          </p>

          {/* Benefits List */}
          <ul className="space-y-1 mb-4">
            <li className="flex items-center gap-2 text-sm">
              <span className="text-yellow-300">✓</span>
              <span className="text-gray-100">100+ Nigeria suppliers contacts</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-yellow-300">✓</span>
              <span className="text-gray-100">Private community & group coaching</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-yellow-300">✓</span>
              <span className="text-gray-100">Certificate of Attendance</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-yellow-300">✓</span>
              <span className="text-gray-100">Templates & checklists for startup</span>
            </li>
          </ul>

          {/* Urgent Message */}
          <p className="text-sm text-gray-100 mb-4 font-semibold">
            Only 20 spots available.
          </p>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="https://selar.com/vistaxpress"
              target="_blank"
              rel="noopener noreferrer"
              className="shake-button inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-6 rounded-full text-sm transition duration-300 transform hover:scale-105"
            >
              Claim Your Bonus Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
