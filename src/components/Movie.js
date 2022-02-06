import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, id, summary, genres }) {
  const STRING_LEN = 235;

  return (
    <div>
      <img src={coverImg} alt={title}></img>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>
        {summary.length > STRING_LEN
          ? `${summary.slice(0, STRING_LEN)}...`
          : summary}
      </p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
