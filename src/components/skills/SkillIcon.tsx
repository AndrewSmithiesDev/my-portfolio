type SkillIconProps = {
    children: React.ReactNode;
    className?: string;
  };
  
  export default function SkillIcon({ children, className = "" }: SkillIconProps) {
    return (
      <div className={`w-12 h-12 text-[var(--accent-foreground)] ${className}`}>
        {children}
      </div>
    );
  }
  