import {Link} from 'react-router-dom';

const BackButton = () => {
  return (
    <Link to={`/`}>
      <button variant="contained" className="backButton">
        Back to Reviews
      </button>
    </Link>
  );
};

export default BackButton;
