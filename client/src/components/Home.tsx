export default function Home() {
    return (
        <>
            <div className="containerc flex">
                <a href="/recipes" className="recommend-box">
                    <div className="recommend-text">
                        오늘의 추천 메뉴는?
                    </div>
                </a>
                <div className="vertical">
                    <a href="/refrigerator" className="refrigerator">
                        <div className="refrigerator-text">
                            냉장고 열기
                        </div>
                    </a>
                    <a href="/my-calendar" className="mycalendar">
                        <div className="mycalendar-text">
                            식단 캘린더
                        </div>
                    </a>
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