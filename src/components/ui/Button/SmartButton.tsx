export type SmartButtonProps = {
  label: string;

  // SVG icon support
  icon?: string; // Шлях до символу, напр. "/icons.svg#icon-name"
  iconPosition?: 'left' | 'right';
  iconFill?: string; // напр. "currentColor", "none", "#fff"
  iconStroke?: string; // напр. "currentColor", "none", "#000"
  iconClassName?: string; // Tailwind класи для svg
  // Стилі та функціональність
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  iconGap?: number;
  variant?: 'primary' | 'secondary' | 'danger';
};

export default function SmartButton({
  label,
  icon,
  iconPosition = 'left',
  iconFill,
  iconStroke,
  iconClassName = '',
  className = '',
  onClick,
  disabled = false,
  loading = false,
  variant = 'primary',
}: SmartButtonProps) {
  const baseClasses =
    'font-semibold py-2 px-4 rounded-full border-star-dust-400 text-star-dust-400 hover:text-tangerine hover:border-tangerine transition-colors border-1 inline-flex items-center justify-center gap-2 focus:outline-tangerine focus:outline-2 focus:text-tangerine py-4 4xl:py-[21px] px-6 4xl:px-6 rounded-full transition-colors duration-300 w-fit';

  const variantClasses = {
    primary:
      'bg-woodsmoke-dimmed text-star-dust-400 border-star-dust-400 hover:border-tangerine hover:text-tangerine',
    secondary:
      'bg-transparent text-tangerine border-tangerine hover:bg-tangerine hover:text-white',
    danger:
      'bg-red-100 text-red-700 border-red-300 hover:bg-red-500 hover:text-white',
  };

  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${
    disabled || loading ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  const Icon = () =>
    icon ? (
      <svg
        className={iconClassName}
        aria-hidden="true"
        fill={iconFill}
        stroke={iconStroke}
      >
        <use href={`${icon}`} />
      </svg>
    ) : null;

  return (
    <button
      className={finalClassName}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        'Loading...'
      ) : icon && iconPosition === 'left' ? (
        <>
          <Icon />
          <span>{label}</span>
        </>
      ) : icon && iconPosition === 'right' ? (
        <>
          <span>{label}</span>
          <Icon />
        </>
      ) : (
        label
      )}
    </button>
  );
}
