import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container">
                    <NavLink className="navbar-brand d-flex justify-content-center align-items-center" to="/">
                        <img src="./photo/logo4.png" className='logo' alt="logo" />
                        <span className='mx-2 logotext'>NEXUS</span>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/About">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Course">Course</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">

                            <button className="btn btn-outline-dark mx-2" type="submit">Join For Free</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
