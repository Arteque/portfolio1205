import { Link, NavLink, Outlet } from "react-router-dom";
import MainLogo from "../assets/MainLogo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faGithub, 
    faRedditAlien, 
    faSquareInstagram,
    faYoutube,
    faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import Burger from "../Components/Shared/Burger";
function Main() {


    const socialData = [
        {
            id:1,
            name: "Github",
            url:"https://github.com/Arteque",
            icon:faGithub,
            title: "Meine Github Repos"
        },
        {
            id:2,
            name: "Reddit",
            url:"https://www.reddit.com/user/LemssiahCode/",
            icon:faRedditAlien,
            title: "Reddit"
        },
        
        {
            id:3,
            name: "Instagram",
            url:"https://www.instagram.com/ah.lemssiah/",
            icon:faSquareInstagram,
            title: "Finden Sie mich auf Instagram"
        },

        {
            id:4,
            name: "Youtube",
            url:"https://www.youtube.com/channel/UCJbe56vnh9gc1qBZSql9lqQ",
            icon:faYoutube,
            title: "Finden Sie mich auf Youtube"
        },
        {
            id:4,
            name: "Twitter X",
            url:"https://twitter.com/LemssiahCode",
            icon:faXTwitter,
            title: "Finden Sie mich auf Twitter X"
        },

    ]

  return (
    <>
    <header id="main-header">
        <div className="top-header">
            <div className="wrapper">
            {
            socialData && (
                <ul className="extern-links">
                    {
                        socialData.map(item => (
                            <li key={item.id}>
                                <Link to={item.url} title={item.title} dataName={item.name} target="_blank" role="button" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={item.icon} />
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                )
            }
            </div>
        </div>
        <div className="wrapper">
        <nav>
            
            <div className="logo-container">
                <Link to="/">
                    <img src={MainLogo} alt="Frontend Web Entwickler LEMSSIAH Ahmed" />
                </Link>
            </div>
            
            <Burger />
            
            <ul className="nav-items">
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/uebermich">Wer bin ich?</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/kontakt">Kontakt</NavLink>
                </li>
            </ul>
        </nav>
        </div>
    </header>
    <main>
        <Outlet />
    </main>
    <footer>Footer</footer>
    </>
  )
}

export default Main