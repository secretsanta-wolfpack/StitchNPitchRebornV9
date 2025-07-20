import React from 'react';

interface ConfettiAnimationProps {
  isActive: boolean;
}

const ConfettiAnimation: React.FC<ConfettiAnimationProps> = ({ isActive }) => {
  if (!isActive) return null;

  // Generate more confetti pieces for better effect
  const confettiPieces = Array.from({ length: 80 }, (_, i) => (
    <div
      key={i}
      className={`confetti-piece confetti-piece-${i % 6}`}
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${4 + Math.random() * 3}s`
      }}
    />
  ));

  return (
    <>
      <style>
        {`
          .confetti-piece {
            position: fixed;
            width: 10px;
            height: 10px;
            top: -20px;
            z-index: 9999;
            animation: confetti-fall ease-out infinite;
            will-change: transform;
          }
          
          .confetti-piece-0 { 
            background: #f97316; 
            border-radius: 50%;
          }
          .confetti-piece-1 { 
            background: #10b981; 
            border-radius: 0;
          }
          .confetti-piece-2 { 
            background: #ec4899; 
            border-radius: 50%;
          }
          .confetti-piece-3 { 
            background: #3b82f6; 
            border-radius: 0;
          }
          .confetti-piece-4 { 
            background: #f59e0b; 
            border-radius: 50%;
          }
          .confetti-piece-5 { 
            background: #8b5cf6; 
            border-radius: 0;
          }
          
          @keyframes confetti-fall {
            0% {
              transform: translateY(-30px) rotate(0deg);
              opacity: 1;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 0.8;
            }
            100% {
              transform: translateY(calc(100vh + 50px)) rotate(720deg);
              opacity: 0;
            }
          }
          
          .bounce-in {
            animation: bounce-in 0.6s ease-out;
          }
          
          @keyframes bounce-in {
            0% { transform: scale(0) rotate(-180deg); opacity: 0; }
            50% { transform: scale(1.2) rotate(-90deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
        `}
      </style>
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
        {confettiPieces}
      </div>
    </>
  );
};

export default ConfettiAnimation;