interface AskUsButtonProps {
  targetId: string;
  className?: string;
}
const AskUsButton = ({ targetId, className = '' }: AskUsButtonProps) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div
      className={[
        'flex items-center justify-center 1xl:gap-3 4xl:gap-5.5',
        className,
      ].join(' ')}
    >
      <button
        type="button"
        onClick={handleClick}
        className="flex items-center justify-center py-6.5 px-14
        max-w-[280px] max-h-[76px] lg:max-w-[258px] lg:max-h-[60px] 1xl:max-w-[280px] 1xl:max-h-[60px]
        rounded-[45px] bg-cod-gray
        border border-tangerine lg:border-gray
        text-tangerine lg:text-gray
        text-2xl/[100%] lg:text-xl/[100%] 1xl:text-2xl/[100%] not-first-of-type:whitespace-nowrap font-semibold tracking-[-0.02em]
        1xl:hover:bg-transparent 1xl:hover:border-tangerine 1xl:hover:text-tangerine
        focus:outline-none focus-visible:ring-2 focus-visible:ring-tangerine
      "
      >
        Запитати в нас
      </button>
      <svg
        className="w-14 h-14 stroke-[2px]  stroke-tangerine lg:stroke-gray"
        aria-hidden="true"
        focusable="false"
      >
        <use href="/images/svg/icons.svg#icon-arrow-down-left" />
      </svg>
    </div>
  );
};
export default AskUsButton;
