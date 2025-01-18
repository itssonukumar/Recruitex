import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";


const Navbar = () => {

    const navigate = useNavigate();
    const [data, setData] = useState('');
    const [userType, setUserType] = useState('');
    useEffect(() => {
        const tempData = JSON.parse(localStorage.getItem('data'));
        setData(tempData);
        const tempUserType = JSON.parse(localStorage.getItem('userType'));
        setUserType(tempUserType);
    }, [location.pathname])

    // Logouts start
    const adminLogout = () => {
        // alert("Logged Out");
        localStorage.removeItem('data');
        localStorage.removeItem('userType');
        navigate('/admin/login')
    }
    const seekerLogout = () => {
        // alert("Logged Out");
        localStorage.removeItem('data');
        localStorage.removeItem('userType');
        navigate('/seeker/login')
    }
    const recruiterLogout = () => {
        // alert("Logged Out");
        localStorage.removeItem('data');
        localStorage.removeItem('userType');
        navigate('/recruiter/login')
    }
    // Logouts End

    if (userType == 'admin') {
        return (
            <>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-9">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <Link className="navbar-brand nav_font" to="/admin">
                                    <img src={`http://localhost:8000/upload/${data.image}`} alt="logo" height="50vw" className='nav_img' />
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link active nav_font" aria-current="page" to="/admin">
                                                <IoMdHome className='nav_icons'/>Home
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link nav_font" to="/admin/seekerlist">
                                                Seeker List
                                            </Link>
                                        </li>
                                        <li className="nav-item me-5">
                                            <Link className="nav-link nav_font" to="/admin/recruiterlist">
                                                Recruiter List
                                            </Link>
                                        </li>
                                        <li className="nav-item me-5" onClick={adminLogout}>
                                            <Link className="nav-link nav_font nav_login">
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                <div className="nav_underline"></div>
            </>
        )
    }
    else if (userType == 'seeker') {
        return (
            <>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-9">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <Link className="navbar-brand nav_font" to="/seeker">
                                    <img src={`http://localhost:8000/upload/${data.image}`} alt="logo" height="50vw" />
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link active nav_font" aria-current="page" to="/seeker">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link nav_font" to="/seeker/jobapply">
                                                Apply For Job
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link nav_font" to="/seeker/jobapplied">
                                                Applied Job
                                            </Link>
                                        </li>
                                        <li className="nav-item me-5">
                                            <Link className="nav-link nav_font" to="/seeker/update">
                                                Update Profile
                                            </Link>
                                        </li>
                                        <li className="nav-item me-5" onClick={seekerLogout}>
                                            <Link className="nav-link nav_font nav_login">
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                <div className="nav_underline"></div>
            </>
        )
    }
    else if (userType == 'recruiter') {
        return (
            <>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-9">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <Link className="navbar-brand nav_font" to="/recruiter">
                                    <img src={`http://localhost:8000/upload/${data.logo}`} alt="logo" height="50vw" />
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link active nav_font" aria-current="page" to="/recruiter">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link nav_font" to="/recruiter/jobpost">
                                                Post Job
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link nav_font" to="/recruiter/postedjob">
                                                Posted Job
                                            </Link>
                                        </li>
                                        <li className="nav-item me-5">
                                            <Link className="nav-link nav_font" to="/recruiter/appliedjob">
                                                Applied Job
                                            </Link>
                                        </li>
                                        <li className="nav-item me-5" onClick={recruiterLogout}>
                                            <Link className="nav-link nav_font nav_login">
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                <div className="nav_underline"></div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-9">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <Link className="navbar-brand nav_font" to="/">
                                    <img src="/public/img/logo/logo.png" alt="logo" height="50vw" />
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link active nav_font" aria-current="page" to="/">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link nav_font" to="/findjob">
                                                Find Job
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link nav_font" to="/about">
                                                About
                                            </Link>
                                        </li>
                                        <li className="nav-item me-5">
                                            <Link className="nav-link nav_font" to="/contact">
                                                Contact
                                            </Link>
                                        </li>
                                        <li>
                                            <div className="nav_button">
                                                {/* First Dropdown */}
                                                <div className="dropdown nav_register">
                                                    <button className="dropdown-toggle nav_register" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <span>Registration</span>
                                                    </button>
                                                    <ul className="dropdown-menu custom-dropdown">
                                                        <li>
                                                            <Link className="dropdown-item" to="recruiter/register">
                                                                Recriuter
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="/seeker/register">
                                                                Job Seeker
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* Second Dropdown */}
                                                <div className="dropdown">
                                                    <button
                                                        className="nav_login dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <span> Login</span>
                                                    </button>
                                                    <ul className="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenuButton2">
                                                        <li>
                                                            <Link className="dropdown-item" to="/admin/login">
                                                                Admin Login
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="/recruiter/login">
                                                                Recriuter Login
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" to="/seeker/login">
                                                                Seeker Login
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                <div className="nav_underline"></div>
            </>
        )
    }
}

export default Navbar
