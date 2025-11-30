import { useNavigate } from "react-router-dom";
import Button from "./Button";
const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <p>This is a simple task tracker app built with React.</p>
      <Button className="btn" text="Go Back" onClick={() => navigate('/')} />
    </div>
  );
};

export default About;