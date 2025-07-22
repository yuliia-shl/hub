export default function Product() {
  return (
    <section className="pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section">
        <h2 className="font-semibold font-second text-[44px]/[110%] hidden">
          Product Page
        </h2>
        <svg className="w-9.5 h-12.5 1xl:h-13 4xl:w-12 4xl:h-16.5 fill-tangerine">
          <use href="/images/svg/icons.svg#icon-logo" />
        </svg>
        <button className="product-button">Learn More</button>
      </div>
    </section>
  );
}
