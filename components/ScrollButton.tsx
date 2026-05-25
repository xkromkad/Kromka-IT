'use client';

interface Props {
  targetId: string;
  className?: string;
  children: React.ReactNode;
}

export default function ScrollButton({ targetId, className, children }: Props) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
