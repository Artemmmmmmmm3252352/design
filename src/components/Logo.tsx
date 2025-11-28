const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stylized wave/movement logo for "Движение Первых" */}
      <circle cx="40" cy="40" r="38" fill="hsl(217 91% 60% / 0.1)" />
      <path
        d="M20 50C25 40 35 35 40 35C45 35 50 40 55 35C60 30 65 25 70 30"
        stroke="hsl(217 91% 60%)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M10 45C18 35 28 30 40 30C52 30 62 35 70 45"
        stroke="hsl(217 91% 50%)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M15 55C22 48 32 45 40 45C48 45 58 48 65 55"
        stroke="hsl(142 71% 45%)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default Logo;
