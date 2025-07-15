const Modules = () => {
  return (
    <div className="container">
      <div>
        <h2>Модуль Управління</h2>
        <p>
          Текст базового опису типу модуля базовий опис в 1-2 речення що це воно
          там таке. Текст базового опису типу модуля базовий опис в 1-2 речення
          що це воно там таке. Текст базового опису типу модуля базовий опис в
          1-2 речення що це воно там таке.
        </p>
      </div>
      <div>
        <div>
          <p>Розмір:</p>
          <p>120см*40см*74см</p>
        </div>
        <div>
          <p>Напруга живлення:</p>
          <p>220 V / 50 Гц</p>
        </div>
      </div>
      <div>
        <div>
          <p>Характеристика:</p>
          <p>текст характеристики</p>
        </div>
        <div>
          <p>Вага:</p>
          <p>170 кг</p>
        </div>
      </div>
      <button>Хочу замовити!</button>
      <div>
        <picture>
          <source
            srcSet="
            /images/photo-large@1x.webp 1x,
            /images/photo-large@2x.webp 2x,
            /images/photo-large@4x.webp 4x
          "
            media="(min-width: 1200px)"
            type="image/webp"
          />
          <source
            srcSet="
            /images/photo-medium@1x.webp 1x,
            /images/photo-medium@2x.webp 2x,
            /images/photo-medium@4x.webp 4x
          "
            media="(min-width: 800px)"
            type="image/webp"
          />
          <img
            src="/images/photo-small@1x.jpg"
            srcSet="/images/photo-small@2x.jpg 2x, /images/photo-small@4x.jpg 4x"
            alt="Модуль управління"
          />
        </picture>
      </div>
      <ul>
        <li>
          <svg className="xs:w-8.5 xs:h-8.5 fill-boulder-gray">
            <use href="/images/svg/icons.svg#icon-5"></use>
          </svg>
          <p>Модуль управління</p>
        </li>
        <li>
          <svg className="xs:w-8.5 xs:h-8.5 fill-boulder-gray">
            <use href="/images/svg/icons.svg#icon-6"></use>
          </svg>
          <p></p>
        </li>
        <li>
          <svg className="xs:w-8.5 xs:h-8.5 fill-boulder-gray">
            <use href="/images/svg/icons.svg#icon-7"></use>
          </svg>
          <p></p>
        </li>
        <li>
          <svg className="xs:w-8.5 xs:h-8.5 fill-boulder-gray">
            <use href="/images/svg/icons.svg#icon-6"></use>
          </svg>
          <p></p>
        </li>
        <li>
          <svg className="xs:w-8.5 xs:h-8.5 fill-boulder-gray">
            <use href="/images/svg/icons.svg#icon-1"></use>
          </svg>
          <p></p>
        </li>
        <li>
          <svg className="xs:w-8.5 xs:h-8.5 fill-boulder-gray">
            <use href="/images/svg/icons.svg#icon-5"></use>
          </svg>
          <p></p>
        </li>
        <li>
          <svg className="xs:w-8.5 xs:h-8.5 fill-boulder-gray">
            <use href="/images/svg/icons.svg#icon-1"></use>
          </svg>
          <p></p>
        </li>
        <li>
          <svg className="xs:w-8.5 xs:h-8.5 fill-boulder-gray">
            <use href="/images/svg/icons.svg#icon-1"></use>
          </svg>
          <p></p>
        </li>
      </ul>
    </div>
  );
};

export default Modules;
