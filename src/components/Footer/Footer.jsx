export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__credit">
        Designed and coded by Fidel Ojimba |{" "}
        <a
          className="footer__link"
          href="https://github.com/EmpyreanBreaker/memory-game"
        >
          Source Code
        </a>
      </p>
      <p className="footer__acknowledgment">
        With thanks to
        <a
          className="footer__link"
          href="https://www.theodinproject.com/lessons/node-path-react-new-memory-card#project-solution"
        >
          The Odin Project
        </a>
      </p>
    </footer>
  );
}