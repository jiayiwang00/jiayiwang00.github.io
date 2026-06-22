import { technologies } from "../data/portfolio";

export function LogoWall() {
  const repeated = [...technologies, ...technologies];

  return (
    <div className="logo-wall" aria-label="Technologies I use">
      <div className="logo-wall__fade logo-wall__fade--left" />
      <div className="logo-wall__fade logo-wall__fade--right" />
      <div className="logo-wall__track">
        {repeated.map((technology, index) => (
          <div className="logo-wall__item" key={`${technology}-${index}`} aria-hidden={index >= technologies.length}>
            <img src={`/svg/${technology}.svg`} alt={index < technologies.length ? technology : ""} width="30" height="30" />
            <span>{technology.charAt(0).toUpperCase() + technology.slice(1)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
