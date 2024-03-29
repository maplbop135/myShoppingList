import { Avatar, Toolbar } from "@material-ui/core";

import ProfileImage from '../images/profile.png';
import HelpImage from '../images/help.png';
import SettingImage from '../images/setting.png';
import LogoutImage from '../images/logout.png';
import { NavLink } from "react-router-dom";

type User = {
    result: {
        name: string,
        imageUrl: string
    }
};

export default function Navbar() {
    const user:User = { result: { name: "", imageUrl: "" }};
    const subMenu = document.getElementById("subMenu");

    function toggleMenu(){
        subMenu?.classList.toggle("open-menu");
    }

    return (
        <nav className="nav">
            <a href='/' className="site-title">My Shopping List</a>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/recipes">Recipes</NavLink>
                </li>
                <li>
                    <NavLink to="/my-calendar">My Calendar</NavLink>
                </li>
                <li>
                    <NavLink to="/refrigerator">Refrigerator</NavLink>
                </li>
                {user.result.name!==""? (<Toolbar>
                            <Avatar className="purple" onClick={toggleMenu} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <div className="sub-menu-wrap" id="subMenu">
                                <div className="sub-menu">
                                    <div className="user-info">
                                        <Avatar className="purple" alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                                        <h3> &nbsp; {user.result.name}</h3>
                                    </div>
                                    <a href="/" className="sub-menu-link">
                                        <img src={ProfileImage} alt="" />
                                        <p>Edit Profile</p>
                                        <span>&gt;</span>
                                    </a>
                                    <a href="/" className="sub-menu-link">
                                        <img src={SettingImage} alt="" />
                                        <p>Settings</p>
                                        <span>&gt;</span>
                                    </a>
                                    <a href="/" className="sub-menu-link">
                                        <img src={HelpImage} alt="" />
                                        <p>Help & Support</p>
                                        <span>&gt;</span>
                                    </a>
                                    <a href="/" className="sub-menu-link">
                                        <img src={LogoutImage} alt="" />
                                        <p>Logout</p>
                                        <span>&gt;</span>
                                    </a>
                                </div>
                            </div>
                        </Toolbar>)
                : (<li><a href="/auth">Sign in</a></li>)}
            </ul>
        </nav>
    );
}