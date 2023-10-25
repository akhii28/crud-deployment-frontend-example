import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav className="navbar bg-warning">
            <Link to="/" className="navbar-brand mx-3 fw-bold">CRUD operations</Link>
            <div className="nav">
                <Link className="nav-link" to="/create-student">Create Student</Link>
                <Link className="nav-link" to="/student-list">Student List</Link>
            </div>
        </nav>
    )
}

export default Nav;