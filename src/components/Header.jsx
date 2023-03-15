import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <Link to={`/`}>
      <h1 className="Header">Games Reviews</h1>
    </Link>
  );
};

export default Header;
