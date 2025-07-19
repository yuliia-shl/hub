type SmartButtonProps = {
  label: string;
  icon?: string; // Назва іконки в спрайті
  iconPosition?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
};

export default function SmartButton({
  label,
  icon,
  iconPosition = 'left',
  className = '',
  onClick,
  disabled = false,
  loading = false,
  variant = 'primary',
}: SmartButtonProps) {
  const baseClasses =
    'font-semibold py-2 px-4 rounded-full transition-colors border-1 inline-flex items-center justify-center gap-2';

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
      <svg className="w-6 h-6 fill-star-dust-400" aria-hidden="true">
        <use href={`#${icon}`} />
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
