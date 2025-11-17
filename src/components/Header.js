import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title = 'Task Tracker' }) => {
    const onClick = () => {
        console.log('Add Task button clicked');
    }
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add Task" onClick={onClick} />

    </header>
  );
};
Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
