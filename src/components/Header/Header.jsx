import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <span className="header__pokeball" aria-hidden="true"></span>
        <div>
          <p className="header__eyebrow">Trainer challenge</p>
          <h1 className="header__title">
            Memory <span className="header__title-accent">Poké</span>
          </h1>
        </div>
      </div>

      <p className="header__instructions">
        <span>Choose each Pokémon only once.</span>
        <span>Every pick reshuffles the field!</span>
      </p>
    </header>
  );
}
