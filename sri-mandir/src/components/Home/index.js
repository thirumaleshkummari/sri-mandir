import NavBar from "../NavBar";

import './index.css'

const Home = () => {
    return(
        <div>
            <NavBar />
            <div className="home-container">
                <div className="text-container">
                <div className="no-one-container">
                    <img src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_achievement.6722fe43.webp&w=32&q=75" alt="no.1 badge" className="no-one-badge" />
                    <p className="no-one-msg">WORLD’S LARGEST APP FOR HINDU DEVOTEES</p>
                </div>
                <h1>Pray daily with <span className="text">Sri Mandir</span>.
                One App for all your devotional needs.</h1>
                <div>
                <img src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_playstore_logo.bb4d1aa2.svg&w=256&q=75" alt="play store" className="get-in-store-logo"/>
                <img src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_appstore_logo.cab7778b.svg&w=256&q=75" alt="apple store" className="get-in-store-logo"/>
                </div>
                </div>
                <img alt="offer img" src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_hero_artwork_en.ecfc0911.webp&w=1080&q=75" className="offer-img"/>
            </div>
            <div className="explore-container">
                <h1>Explore Sri Mandir</h1>
                <ul className="explore-list-container">
                    <li className="list-item">
                    <img src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_seva.48294bc9.svg&w=96&q=75" alt="book" className="logo" />
                    <p>Book pujas At Temple</p>
                    </li>
                    <li className="list-item">
                    <img src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_astro.4e8171bd.svg&w=96&q=75" alt="call" className="logo" />
                    <p>Book pujas At Temple</p>
                    </li>
                    <li className="list-item">
                    <img src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_chadhava_seva.c04d828f.svg&w=96&q=75" alt="offer" className="logo" />
                    <p>Book pujas At Temple</p>
                    </li>
                    <li className="list-item">
                    <img src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_festivals.19495f6a.svg&w=96&q=75" alt="read" className="logo" />
                    <p>Book pujas At Temple</p>
                    </li>
                    <li className="list-item">
                    <img src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_festivals.19495f6a.svg&w=96&q=75" alt="listen" className="logo" />
                    <p>Book pujas At Temple</p>
                    </li>
                    <li className="list-item">
                    <img src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_mandir_darshan.68d86126.svg&w=96&q=75" alt="mandir" className="logo" />
                    <p>Book pujas At Temple</p>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Home