import { Avatar, Toolbar, Button } from "@material-ui/core";

export default function Navbar() {
    const user = null;

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
                            <div className="profile">
                                <Avatar className="purple" alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                                <Button>Logout</Button>
                            </div>
                        </Toolbar>)
                : (<li><a href="/auth">Sign in</a></li>)}
            </ul>
        </nav>
    );
}