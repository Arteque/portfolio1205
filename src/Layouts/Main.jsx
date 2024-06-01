import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link, NavLink, Outlet } from "react-router-dom";
import MainLogo from "../assets/MainLogo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faGithub, 
    faRedditAlien, 
    faSquareInstagram,
    faYoutube,
    faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Burger from "../Components/Shared/Burger";
import ColorMode from "../Components/ColorMode";
function Main() {


    useEffect(() => {
        

        //SocialLinks Header
        const socialLinks = document.querySelectorAll(".social-link")
        socialLinks.forEach(item => {
            item.addEventListener("mouseenter", () => {
                item.style.cssText = "background:" + item.dataset.color
            })
            item.addEventListener("mouseleave", () => {
                item.style.cssText = "background:transparent"
            })
        }) 
        
        
        //ScrollLogo
        document.addEventListener("scroll", () => {
            if(window.scrollY >= 200){
                document.body.classList.add("scrolled")
            }else{
                document.body.classList.remove("scrolled")
            }
        })
    },[])

      const {pathname} = useLocation();
    
      useEffect(() => {
         document.body.classList.remove("open")
      }, [ pathname ]);


    const socialData = [
        {
            id:1,
            name: "Github",
            url:"https://github.com/Arteque",
            icon:faGithub,
            title: "Meine Github Repos",
            color:"#171515"
        },
        {
            id:2,
            name: "Reddit",
            url:"https://www.reddit.com/user/LemssiahCode/",
            icon:faRedditAlien,
            title: "Reddit",
            color: "#FF4500"
        },
        
        {
            id:3,
            name: "Instagram",
            url:"https://www.instagram.com/ah.lemssiah/",
            icon:faSquareInstagram,
            title: "Finden Sie mich auf Instagram",
            color:"linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
        },

        {
            id:4,
            name: "Youtube",
            url:"https://www.youtube.com/channel/UCJbe56vnh9gc1qBZSql9lqQ",
            icon:faYoutube,
            title: "Finden Sie mich auf Youtube",
            color:"#FF0000"
        },
        {
            id:5,
            name: "Twitter X",
            url:"https://twitter.com/LemssiahCode",
            icon:faXTwitter,
            title: "Finden Sie mich auf Twitter X",
            color: "#000000"
        },

    ]

    

  
  return (
    <>
    <header id="main-header">
        <div className="wrapper">
            <div className="top-header">
            {/* <ColorMode /> */}
            {
            socialData && (
                <ul className="extern-links">
                    {
                        socialData.map(item => (
                            <li key={item.id} 
                            className="social-link" data-color={item.color}
                            >
                                <Link to={item.url} title={item.title} dataname={item.name} target="_blank" role="button" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={item.icon}/>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                )
            }
            </div>
        <nav>
            
            <div className="logo-container">
                <Link to="/">
                    <img src={MainLogo} alt="Frontend Web Entwickler LEMSSIAH Ahmed" />
                </Link>
            </div>
            
            <Burger />
            
            <ul className="nav-items">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/uebermich">Wer bin ich?</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/kontakt">Kontakt</NavLink></li>
            </ul>
        </nav>
        </div>
    </header>
    <main>
        <Outlet />
    </main>
    <footer>
        <div className="footer-top">
            <h2>Ahmed Lemssiah</h2>
            <ul className="footer-nav-items">
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
                <li>
                    <NavLink to="/kontakt">Impressum</NavLink>
                </li>
                <li>
                    <NavLink to="/kontakt">Datenschutz</NavLink>
                </li>
            </ul>
        </div>
    </footer>
    </>
  )
}

export default Main