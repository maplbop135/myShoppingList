export default function Navbar() {

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
            </ul>
        </nav>
    );
}