export default function Home() {
    return (
        <>
            <div className="container flex">
                <div className="recommend-box">
                    <a href="/">Today's recommendation</a>
                </div>
                <div className="vertical">
                    <div className="refrigerator">
                        <a href="/refrigerator">Refrigerator</a>
                    </div>
                    <div className="mycalendar">
                        <a href="/my-calendar">My Calendar</a>
                    </div>
                </div>
            </div>
            <div className="home-recipes">
                Hot recipes
            </div>
            <div className="home-recipes">
                Special recipes
            </div>
        </>
    );
}