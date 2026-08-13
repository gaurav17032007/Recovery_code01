import { Link } from "react-router-dom";
function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>|{" "}
            <Link to="/Add_User">Add_User</Link>|{" "}
            <Link to="/User_List">User_List</Link>|{" "}
        </nav>
    )
}
export default Nav;