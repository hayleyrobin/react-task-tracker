import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title = 'Task Tracker' , onAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add Task" onClick={onAdd} />

    </header>
  );
};
Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
