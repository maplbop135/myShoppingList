export default function Home() {
    return (
        <>
            <div className="container flex">
                <a href="/recipes" className="recommend-box">
                    <div className="recommend-text">
                        오늘의 추천 메뉴는?
                    </div>
                </a>
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