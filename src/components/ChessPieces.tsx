/* ═══════════════════════════════════════════════════════════════════════════
   NEXT-GEN CHESS PIECES — SVG-BASED
   ─ Custom Staunton-inspired silhouettes with crisp, unambiguous fills
   ─ Works on both dark and light board squares
   ─ White pieces use a LAYERED fill: bright cream base + charcoal outline +
     subtle inner shadow. Reads perfectly on mobile where the page used to
     render near-white pieces that blended with the parchment squares.
   ─ Black pieces use a true-black fill with a bright outline so they keep
     a clean silhouette on dark navy squares.
═══════════════════════════════════════════════════════════════════════════ */

import { memo } from 'react';

export type PieceType = 'p' | 'n' | 'b' | 'r' | 'q' | 'k';
export type PieceColor = 'w' | 'b';

interface ChessPieceProps {
  type: PieceType;
  color: PieceColor;
  /** Optional className forwarded to the root <svg>. */
  className?: string;
}

/* Shared path library — 100×100 viewBox.
   Each path is the hero silhouette of one piece, oriented upright. */
const PATHS: Record<PieceType, string> = {
  // Pawn — round head, banded collar, flared base
  p: 'M50 12 C 57 12 63 18 63 25 C 63 30 60 34 56 36 L 60 44 L 40 44 L 44 36 C 40 34 37 30 37 25 C 37 18 43 12 50 12 Z M34 46 L66 46 L64 54 L36 54 Z M30 58 L70 58 L74 78 L26 78 Z M22 82 L78 82 L82 92 L18 92 Z',

  // Knight — stylised horse head in profile
  n: 'M28 92 L72 92 L75 82 L70 78 C 70 70 68 64 62 60 L 64 54 L 70 50 L 72 42 C 76 36 74 28 68 22 C 62 16 54 12 46 14 C 38 16 32 22 30 30 L 28 38 L 20 44 C 16 50 14 58 18 64 L 26 66 L 32 70 C 30 74 28 78 28 82 Z M 44 28 C 48 26 52 28 52 32 C 52 36 48 38 44 36 C 40 34 40 30 44 28 Z',

  // Bishop — tall mitre with slit + collar
  b: 'M50 10 C 54 10 57 14 56 18 L 54 22 C 58 26 62 32 62 40 C 62 50 58 58 52 62 L 54 68 L 46 68 L 48 62 C 42 58 38 50 38 40 C 38 32 42 26 46 22 L 44 18 C 43 14 46 10 50 10 Z M 46 36 L 54 28 L 56 30 L 48 38 Z M 34 70 L 66 70 L 64 78 L 36 78 Z M 26 82 L 74 82 L 78 92 L 22 92 Z',

  // Rook — castellated crown, solid tower
  r: 'M22 14 L32 14 L32 22 L40 22 L40 14 L50 14 L50 22 L58 22 L58 14 L68 14 L68 14 L78 14 L78 32 L72 36 L72 62 L78 66 L78 72 L22 72 L22 66 L28 62 L28 36 L22 32 Z M 28 76 L 72 76 L 76 86 L 24 86 Z M 20 90 L 80 90 L 84 96 L 16 96 Z',

  // Queen — crown of five points, regal body
  q: 'M50 8 C 53 8 55 10 55 13 C 55 15 54 17 52 18 L 56 28 L 64 18 L 66 32 L 76 22 L 74 40 L 82 34 L 76 54 L 82 56 L 76 64 L 24 64 L 18 56 L 24 54 L 18 34 L 26 40 L 24 22 L 34 32 L 36 18 L 44 28 L 48 18 C 46 17 45 15 45 13 C 45 10 47 8 50 8 Z M 26 68 L 74 68 L 72 76 L 28 76 Z M 20 80 L 80 80 L 84 92 L 16 92 Z',

  // King — cross-topped crown, wide base
  k: 'M50 6 L50 14 M 46 10 L 54 10 M 50 14 C 56 14 60 18 60 24 C 60 30 56 34 52 36 L 54 42 L 46 42 L 48 36 C 44 34 40 30 40 24 C 40 18 44 14 50 14 Z M 34 44 L 66 44 L 64 52 L 36 52 Z M 28 56 L 72 56 L 70 72 L 30 72 Z M 24 76 L 76 76 L 74 84 L 26 84 Z M 18 88 L 82 88 L 84 96 L 16 96 Z',
};

/* Classic crown inner-strokes for depth. Shared across pieces via a symbol. */

const ChessPieceRaw = ({ type, color, className }: ChessPieceProps) => {
  const isWhite = color === 'w';
  const rootClasses = [
    'chess-piece-svg',
    `chess-piece-svg--${color}`,
    `chess-piece-svg--${type}`,
    className || '',
  ].filter(Boolean).join(' ');

  return (
    <svg
      className={rootClasses}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id={`pc-fill-${color}-${type}`} x1="0%" y1="0%" x2="0%" y2="100%">
          {isWhite ? (
            <>
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#f4ece0" />
              <stop offset="100%" stopColor="#d9c9aa" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#1c1c1c" />
              <stop offset="60%" stopColor="#0a0a0a" />
              <stop offset="100%" stopColor="#000000" />
            </>
          )}
        </linearGradient>
        <linearGradient id={`pc-shine-${color}-${type}`} x1="0%" y1="0%" x2="0%" y2="100%">
          {isWhite ? (
            <>
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#3a3a3a" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#3a3a3a" stopOpacity="0" />
            </>
          )}
        </linearGradient>
      </defs>

      {/* Soft ambient shadow under the piece — helps on both themes */}
      <ellipse cx="50" cy="94" rx="30" ry="2.6" className="chess-piece-svg__shadow" />

      {/* Silhouette outline: white pieces get a thick charcoal outline,
          black pieces get a thin cream rim for separation on dark squares. */}
      <path
        d={PATHS[type]}
        fill={`url(#pc-fill-${color}-${type})`}
        stroke={isWhite ? '#141414' : '#f2eadf'}
        strokeWidth={isWhite ? 2.4 : 1.4}
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      {/* Subtle specular highlight down the center to sell the 3D feel */}
      <path
        d={PATHS[type]}
        fill={`url(#pc-shine-${color}-${type})`}
        opacity="0.45"
        pointerEvents="none"
      />
    </svg>
  );
};

const ChessPiece = memo(ChessPieceRaw);
export default ChessPiece;
