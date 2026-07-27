interface FancyBackgroundProps {
  variant?: 'hero' | 'blue-purple' | 'pink-cyan' | 'indigo-pink' | 'yellow-green' | 'purple-blue' | 'cyan-pink' | 'multi';
}

export default function FancyBackground({ variant = 'multi' }: FancyBackgroundProps) {
  const backgrounds = {
    hero: (
      <>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500 opacity-30 dark:opacity-40 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[150px] animate-pulse" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500 opacity-30 dark:opacity-40 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-500 opacity-25 dark:opacity-35 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </>
    ),
    'blue-purple': (
      <>
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500 opacity-30 dark:opacity-40 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500 opacity-30 dark:opacity-40 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[150px]" />
        <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-cyan-500 opacity-20 dark:opacity-30 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[120px]" />
      </>
    ),
    'pink-cyan': (
      <>
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-pink-500 opacity-30 dark:opacity-40 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[150px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-500 opacity-30 dark:opacity-40 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500 opacity-20 dark:opacity-30 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[120px]" />
      </>
    ),
    'indigo-pink': (
      <>
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-indigo-500 opacity-30 dark:opacity-40 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-pink-500 opacity-30 dark:opacity-40 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[150px]" />
        <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-violet-500 opacity-20 dark:opacity-30 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[120px]" />
      </>
    ),
    'yellow-green': (
      <>
        <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-yellow-500 opacity-30 dark:opacity-40 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-green-500 opacity-30 dark:opacity-40 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500 opacity-20 dark:opacity-30 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[120px]" />
      </>
    ),
    'purple-blue': (
      <>
        <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-purple-500 opacity-30 dark:opacity-40 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-blue-500 opacity-30 dark:opacity-40 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-500 opacity-20 dark:opacity-30 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[120px]" />
      </>
    ),
    'cyan-pink': (
      <>
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-500 opacity-30 dark:opacity-40 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-pink-500 opacity-30 dark:opacity-40 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-500 opacity-20 dark:opacity-30 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[120px]" />
      </>
    ),
    multi: (
      <>
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500 opacity-30 dark:opacity-40 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500 opacity-30 dark:opacity-40 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500 opacity-25 dark:opacity-35 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[150px]" />
        <div className="absolute top-2/3 right-1/3 w-[500px] h-[500px] bg-orange-500 opacity-20 dark:opacity-30 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[120px]" />
      </>
    ),
  };

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {backgrounds[variant]}
    </div>
  );
}
