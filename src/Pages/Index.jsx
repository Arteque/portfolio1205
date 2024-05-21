import { Link } from "react-router-dom"

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
    </>
  )
}

export default index