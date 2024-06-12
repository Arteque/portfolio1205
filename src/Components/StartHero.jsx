
import "../Styles/StartHero.scss"
import AvatarMain from "./AvatarMain"
import CallBtn from "./Shared/CallBtn"




function StartHero() {
  return (
    <section id="hero">
        <div className="wrapper">
          
          <div className="content">
            <h2>
              <span className="top">
                ich bin
              </span>
              <span className="main">
                Frontend<em>Web</em>Entwickler
              </span>
            </h2>
            <p>Ich manipuliere Pixel, um Visionen zum Leben zu erwecken
            </p>
            <CallBtn path="/portfolio">
               Portfolio
            </CallBtn>
          </div>
          <div className="media">
            {/* <img src="/Avatars/AvatarMain.svg" alt="Frontend Web Entwickler Ahmed Lemssiah Avatar" /> */}
            <AvatarMain />
          </div>
        </div>
    </section>
  )
}

export default StartHero