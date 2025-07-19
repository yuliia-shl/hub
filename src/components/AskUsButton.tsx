interface AskUsButtonProps {
  targetId: string;
}
const AskUsButton = ({ targetId }: AskUsButtonProps) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="flex items-center justify-center gap-3 4xl:gap-[22px]">
      <button
        type="button"
        onClick={handleClick}
        className="flex items-center justify-center py-6.5 px-[57px]
        max-w-[280px] max-h-[76px]
        rounded-[45px] bg-cod-gray
        border border-tangerine 1xl:border-gray
        text-tangerine 1xl:text-gray
        text-2xl/[100%] whitespace-nowrap font-semibold tracking-[-0.02em]
        hover:bg-tangerine hover:text-cod-gray transition
        1xl:hover:bg-transparent 1xl:hover:border-tangerine 1xl:hover:text-tangerine
        focus:outline-none focus-visible:ring-2 focus-visible:ring-tangerine
      "
      >
        Запитати в нас
      </button>
      <svg
        className="w-[56px] h-[56px] stroke-[2px]  stroke-tangerine 1xl:stroke-gray"
        aria-hidden="true"
        focusable="false"
      >
        <use href="/public/images/svg/icons.svg#icon-arrow-down-left" />
      </svg>
    </div>
  );
};
export default AskUsButton;
