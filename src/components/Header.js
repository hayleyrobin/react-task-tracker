import PropTypes from "prop-types";

const Header = ({ title = 'Task Tracker' }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};
Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
