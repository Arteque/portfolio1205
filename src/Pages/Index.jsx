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
      <section id="service">
        <div className="wrapper">
          <header className="section-header">
            <h2>
              Über <em>mich</em>
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nam doloremque aliquid eligendi corrupti cumque reiciendis delectus perspiciatis, quis illo?
            </p>
          </header>
          <div className="content">
            <div className="col">
              <img src="" alt="" />
            </div>
            <div className="col">
              <h3> 
                Ideen<em>Erfinder</em>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default index