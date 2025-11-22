import { lazy, Suspense, memo } from 'react';

const QuantumAtomComponent = lazy(() =>
  import('./QuantumAtom').then(m => ({ default: m.QuantumAtom }))
);

// Lightweight fallback
const QuantumAtomFallback = memo(() => (
  <div className="absolute inset-0 scale-75 sm:scale-90 lg:scale-100">
    <div className="relative w-full h-full bg-gradient-to-br from-[#0D1B4C]/80 via-[#020817]/60 to-[#0D1B4C]/80 rounded-full" />
  </div>
));

QuantumAtomFallback.displayName = 'QuantumAtomFallback';

export const QuantumAtomLazy = memo(() => (
  <Suspense fallback={<QuantumAtomFallback />}>
    <QuantumAtomComponent />
  </Suspense>
));

QuantumAtomLazy.displayName = 'QuantumAtomLazy';
