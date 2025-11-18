import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title = 'Task Tracker' , onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showAdd ? "green" : "red"} text={showAdd ? "Add Task" : "Close"} onClick={onAdd} />

    </header>
  );
};
Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
