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
      <section id="about">
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
              In einer Zeit, in der alle auf etwa 376px breite Bildschirme starren, ist es entscheidend, sich und/oder sein Unternehmen anzupassen, um dort responsive, interaktiv und animiert präsent zu sein. Die digitale Präsenz ist heute mehr als nur eine Option; sie ist eine Notwendigkeit. Unternehmen, die es versäumen, ihre Online-Präsenz zu optimieren, riskieren, hinter der Konkurrenz zurückzubleiben. Eine responsive Website stellt sicher, dass Inhalte auf allen Geräten – ob Desktop, Tablet oder Smartphone – perfekt angezeigt werden. Dies ist besonders wichtig in einer Ära, in der mobile Geräte einen großen Teil des Internetverkehrs ausmachen.

Jede Firma hat eine eigene Marktpositionierung und spricht ihre Kunden anders an. Eine Website sollte die Unternehmenswerte strahlend online darstellen. Dies bedeutet, dass die Website nicht nur funktional, sondern auch ästhetisch ansprechend sein sollte. Farben, Layout, Schriftarten und Bilder sollten alle sorgfältig ausgewählt werden, um die Markenidentität zu verstärken. Eine gut gestaltete Website kann das Vertrauen der Kunden stärken und die Markenloyalität erhöhen.

Es kann keine Kreativität geben, ohne zu verstehen, was der Kunde erwartet. Die Bedürfnisse und Erwartungen der Zielgruppe zu kennen, ist der Schlüssel zur Schaffung einer effektiven Website. Dies erfordert eine gründliche Markt- und Zielgruppenanalyse. Welche Probleme haben Ihre Kunden? Welche Lösungen suchen sie? Welche Art von Benutzererfahrung schätzen sie? Durch die Beantwortung dieser Fragen kann ich eine Website entwickeln, die nicht nur gut aussieht, sondern auch funktioniert.

Zusätzlich zur Benutzererfahrung spielt die Interaktivität eine wichtige Rolle. Interaktive Elemente wie Animationen, Call-to-Action-Buttons und benutzerfreundliche Navigation können die Benutzerbindung erhöhen. Eine interaktive Website lädt die Besucher ein, mehr Zeit auf ihr zu verbringen, was letztlich zu höheren Konversionsraten führen kann.

Zusammenfassend lässt sich sagen, dass eine moderne, gut gestaltete und funktionsreiche Website unerlässlich ist, um in der heutigen digitalen Welt erfolgreich zu sein. Gehen Sie digital oder gehen Sie nach Hause – die Wahl liegt bei Ihnen, aber die Entscheidung sollte klar sein. Als Frontend-Webentwickler kann ich Ihnen helfen, diese digitale Präsenz zu erreichen und Ihre Online-Ziele zu verwirklichen. Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default index