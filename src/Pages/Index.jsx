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
              <h3>Kundenbetreuung und Lösungen</h3>
              <p>Ich arbeite täglich mit einer Vielzahl von Kunden aus ganz Deutschland zusammen. Dabei stehen ihre individuellen Anforderungen und Wünsche im Mittelpunkt meiner Arbeit.</p>
              
              <h3>Leidenschaft für Lösungen</h3>
              <p>Antworten, Erklärungen, Lösungen und kreative Ideen zu entwickeln, ist meine Leidenschaft und gehört zu meinem Alltag. Es ist ein spannender Prozess, der viel Einfühlungsvermögen und Kreativität erfordert.</p>
              
              <h3>Den perfekten Ansatz finden</h3>
              <p>Den perfekten Ansatz zu finden, bedeutet, meine Kunden und ihre Bedürfnisse genau zu verstehen, um maßgeschneiderte Lösungen anbieten zu können. Jeder Kunde bringt seine eigenen Herausforderungen und Ziele mit, und es ist meine Aufgabe, diese zu erkennen und die bestmöglichen Strategien zu entwickeln. Dies kann nur durch eine enge Zusammenarbeit und eine offene Kommunikation erreicht werden.</p>
              
              <h3>Meine Vorgehensweise</h3>
              <ul>
                  <li>Intensive Gespräche führen</li>
                  <li>Alle Aspekte und Erwartungen erfassen</li>
                  <li>Flexibel und innovativ denken</li>
                  <li>Standardisierte sowie kreative Lösungen anbieten</li>
                  <li>Nachhaltige Mehrwerte schaffen</li>
              </ul>
              
              <h3>Ziele</h3>
              <p>Mein Ziel ist es, Mehrwert zu schaffen und die Kundenbeziehungen nachhaltig zu stärken, indem ich stets darauf achte, dass die entwickelten Lösungen nicht nur kurzfristig, sondern auch langfristig erfolgreich sind.</p>
            </div>
          </div>
          
          <div className="content">
            <div className="col">
              <div className="multi-media-container">
                <div className="main-media">
                  <img src="/Avatars/DesignerAvatar.svg" alt="Erfinder Avatar" />
                </div>
                <div className="bg-media">
                  <img className="rotate" src="/General/outlineCircle.svg" alt="outlineCircle" />
                </div>
                <div className="tools-media rotate">
                  <img className="right center" src="/Avatars/Designer/brush.svg" alt="Element3" />
                  <img className="left center" src="/Avatars/Designer/colorBlue_1.svg" alt="Element3" />
                  <img className="left top" src="/Avatars/Designer/piplette.svg" alt="Element3" />
                  <img className="right bottom" src="/Avatars/Designer/colorplaett.svg" alt="Element3" />
                </div>
              </div>
            </div>
            <div className="col">
              <h3> 
                Websites <em>Designer</em>
              </h3>
              
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae voluptatibus provident sit suscipit commodi quibusdam rem iure veniam. Quos distinctio facilis, amet possimus, dignissimos laudantium nemo dolores autem molestias omnis aspernatur voluptates cumque doloremque mollitia maxime modi commodi minima. Vel, consectetur ipsa praesentium nesciunt deleniti voluptates libero assumenda. Quasi!
              </p>
              <h4>Lorem ipsum dolor sit </h4>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consectetur impedit vitae nihil ex voluptas deleniti odit, quasi minus dicta dolorem perferendis excepturi aspernatur officiis nobis rem. Iusto, itaque. Deleniti?
              </p>
              <h4>
                Lorem ipsum dolor sit.
              </h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eius.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A minus eveniet repellendus dolores aut culpa magni quia pariatur tempora architecto?
                </li>
              </ul>
            </div>
          </div>

          <div className="content">
            <div className="col">
              <div className="multi-media-container">
                <div className="main-media">
                  <img src="/Avatars/EntwicklerAvatar.svg" alt="Erfinder Avatar" />
                </div>
                <div className="bg-media">
                  <img className="rotate" src="/General/outlineCircle.svg" alt="outlineCircle" />
                </div>
                <div className="tools-media rotate">
                  <img className="right center" style={{maxWidth:'80px', maxHeight:'200px'}} src="/Avatars/Entwickler/mouse.svg" alt="Element3" />
                  <img className="left center" style={{maxWidth:'150px', maxHeight:'200px'}} src="/Avatars/Entwickler/keyboard.svg" alt="Element3" />
                  <img className="left top" src="/Avatars/Entwickler/calendar.svg" alt="Element3" />
                  <img className="right bottom" style={{maxWidth:'200px', maxHeight:'200px'}} src="/Avatars/Entwickler/screen.svg" alt="Element3" />
                </div>
              </div>
            </div>
            <div className="col">
              <h3> 
                Website <em>Entwickler</em>
              </h3>
              
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae voluptatibus provident sit suscipit commodi quibusdam rem iure veniam. Quos distinctio facilis, amet possimus, dignissimos laudantium nemo dolores autem molestias omnis aspernatur voluptates cumque doloremque mollitia maxime modi commodi minima. Vel, consectetur ipsa praesentium nesciunt deleniti voluptates libero assumenda. Quasi!
              </p>
              <h4>Lorem ipsum dolor sit </h4>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consectetur impedit vitae nihil ex voluptas deleniti odit, quasi minus dicta dolorem perferendis excepturi aspernatur officiis nobis rem. Iusto, itaque. Deleniti?
              </p>
              <h4>
                Lorem ipsum dolor sit.
              </h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eius.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A minus eveniet repellendus dolores aut culpa magni quia pariatur tempora architecto?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default index