import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function About() {
  return (
    <Card>
      <div className="about">
        <h1>About</h1>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default About;
