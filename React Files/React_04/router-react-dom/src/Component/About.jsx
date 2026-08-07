import { Link } from "react-router-dom";
function About() {
    return(
        <div>
            <nav>
                <Link to={'/tohome'}>tohome</Link>
                <Link to={'/tohome2'}>tohome2</Link>
            </nav>
        </div>
    )
}
export default About;