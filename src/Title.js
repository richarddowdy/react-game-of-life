import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Title = () => {
  return (
    <>
      <h1>Game of Life</h1>
      <p>
        This is my attempt to visualize the game of life with React and hooks.
      </p>
      <a
        href={"https://github.com/richarddowdy/react-game-of-life"}
        alt="Link to Github repo"
        style={{ textDecoration: "none !important", color: "black" }}
      >
        <FontAwesomeIcon icon={faGithub} size="4x" />
        <span style={{ alignContent: "center", justifyContent: "center" }}>
          Link to Github repo.
        </span>
      </a>
    </>
  );
};

export default Title;
