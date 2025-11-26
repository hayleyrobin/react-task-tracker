import PropTypes from "prop-types";
import { useLocation } from "react-router-dom"; //to access the current route
import Button from "./Button";

const Header = ({ title = 'Task Tracker' , onAdd, showAdd }) => {
  const location = useLocation(); // get the current route
  return (
    <header className="header">
      <h1>{title}</h1>
      {/* only show the add button on the home page */}
      {location.pathname === '/' && (
        <Button color={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add"} onClick={onAdd} />
      )}
    </header>
  );
};
Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
