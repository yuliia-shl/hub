export type HeroTitleProps = {
  className?: string; // Додаткові класи для стилізації
};

export default function HiroTitle({ className = '' }: HeroTitleProps) {
  return (
    <div className={className}>
      <h1 className="font-second text-[34px]/[1] mb-5.5 1xl:mb-3.5  1xl:text-[64px]/[1] 3xl:text-[82px]/[1] 4xl:text-[94px]/[1] font-medium text-gallery-white">
        <span className="text-tangerine">Smart</span> Locker HUB
      </h1>
      <p className="text-[18px]/[1.22] 4xl:text-[22px] font-normal text-alto-white max-w-69 1xl:max-w-125 text-left 1xl:text-center">
        Реалізація комплекса послуг та задоволення потреб населення в одному
        рішенні
      </p>
    </div>
  );
}
