import "../Styles/StartHero.scss"
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
            <p>&quot;Ich manipuliere Pixel, um Visionen zum Leben zu erwecken&quot; <br /> <strong>Ahmed LEMSSIAH</strong>
            </p>
            <CallBtn path="/portfolio">
               Portfolio
            </CallBtn>
          </div>
          <div className="media">
            <img src="/Avatars/AvatarMain.svg" alt="Frontend Web Entwickler Ahmed Lemssiah Avatar" />
          </div>
        </div>
    </section>
  )
}

export default StartHero