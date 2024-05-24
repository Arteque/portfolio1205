import { Link } from "react-router-dom"
import Skills from "../Components/Skills"

function index() {
  
  return (
    <>
      <section id="hero">
        <div className="wrapper">
          <div className="content">
            <h2>
              <span className="top">
                Ahmed LEMSSIAH
              </span>
              <span className="main">
                Frontend<em>Web</em>Entwickler
              </span>
            </h2>
            <p> Ich manipuliere Pixel, um Visionen zum Leben zu erwecken </p>
            <div className="call">
              <Link to="/portfolio">
                Portfolio
              </Link>
            </div>
          </div>
          <div className="media">
            <img src="/Avatars/AvatarMain.svg" alt="Frontend Web Entwickler Ahmed Lemssiah Avatar" />
          </div>
        </div>
      </section>
      <section className="between-section" id="between1">
        <div className="wrapper">
            <header className="section-header">
              <h2>
                Skill<em>set</em>
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis numquam quibusdam quo sequi voluptas perferendis, perspiciatis aspernatur eos repudiandae nam.
              </p>
            </header>
            <Skills />
        </div>
      </section> 
      <section id="service">
        <div className="wrapper">
          <header className="section-header">
            <h2>
              Über <em>mich</em>
            </h2>
            <p>
            Ich bin und liebe es Webentwickler zusein. 
            </p>
          </header>
          <div className="content">
            <div className="col">
              <div className="multi-media-container ">
                <div className="main-media">
                  <img src="/Avatars/ErfinderAvatar.svg" alt="Erfinder Avatar" />
                </div>
                <div className="bg-media">
                  <img className="rotate" src="/General/outlineCircle.svg" alt="outlineCircle" />
                </div>
                <div className="tools-media rotate">
                  <img className="right center" src="/Avatars/Erfinder/Element 3.svg" alt="Element3" />
                  <img className="left center" src="/Avatars/Erfinder/LaborFlasche1.svg" alt="Element3" />
                  <img className="left top" src="/Avatars/Erfinder/LaborMischFlasche1.svg" alt="Element3" />
                  <img className="right bottom" src="/Avatars/Erfinder/Mikroskop.svg" alt="Element3" />
                </div>
              </div>
            </div>
            <div className="col">
              <h3> 
                Ideen<em>Erfinder</em>
              </h3>
              <h4>
                Go Digital or Go Home!
              </h4>
              <p>
                Ich arbeite täglich mit einer Vielzahl von Kunden aus ganz Deutschland zusammen. 
              </p>
              <p>
                  <b>Antworten</b>, <b>Erklärungen</b>, <b>Lösungen und kreative Ideen zu entwickeln</b>, ist meine Leidenschaft und gehört zu meinem Alltag. Den perfekten Ansatz zu finden, bedeutet, meine Kunden und ihre Bedürfnisse genau zu verstehen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default index