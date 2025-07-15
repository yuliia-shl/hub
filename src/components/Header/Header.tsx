export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center pr-6 pl-6 pt-3.5 pb-3.5">
        <a href="index.html" title="Logo" aria-label="Home" aria-hidden="true">
          <svg
            width="38"
            height="44"
            viewBox="0 0 36 36"
            aria-hidden="true"
            role="img"
            className="h-9 w-9"
          >
            <use href="/images/svg/icons.svg#icon-logo"></use>
          </svg>
        </a>
        <h1>Header</h1>
      </div>
    </header>
  );
}
