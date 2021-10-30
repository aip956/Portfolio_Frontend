import { Link } from "react-router-dom";

function Header(props) {
    // Inline styel for the nav tag
const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
    boxShadow: "10px 5px 5px black",
    borderRadius: "10px",
};

    return (
        <header>
        <h1>My Portfolio Page</h1>
        <nav style ={navStyle}>
            <Link to="/">
                <div>HOME</div>
            </Link>

            <Link to="/about">
                <div>ABOUT</div>
            </Link>

            <Link to="/projects">
                <div>PROJECTS</div>
            </Link>

        </nav>
        </header>
    );
  }
  
  export default Header;