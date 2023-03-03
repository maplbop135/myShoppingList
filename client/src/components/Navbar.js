import { Avatar, Toolbar } from "@material-ui/core";

import ProfileImage from '../images/profile.png';
import HelpImage from '../images/help.png';
import SettingImage from '../images/setting.png';
import LogoutImage from '../images/logout.png';

export default function Navbar() {
    const user = null;
    const subMenu = document.getElementById("subMenu");

    function toggleMenu(){
        subMenu.classList.toggle("open-menu");
    }

    return (
        <nav className="nav">
            <a href='/' className="site-title">My Shopping List</a>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/recipes">Recipes</a>
                </li>
                <li>
                    <a href="/my-calendar">My Calendar</a>
                </li>
                <li>
                    <a href="/refrigerator">Refrigerator</a>
                </li>
                {user? (<Toolbar>
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