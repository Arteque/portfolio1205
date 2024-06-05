import { useEffect } from "react"

import "../Styles/StartHero.scss"
import AvatarMain from "./AvatarMain"
import CallBtn from "./Shared/CallBtn"

const animationCanvas = () => {
  const canvas = document.querySelector("#start-hero-canvas")
  const ctx = canvas.getContext("2d")
  console.log(ctx)
}


function StartHero() {
  return (
    <section id="hero">
        <div className="wrapper">
          <canvas id="start-hero-canvas" onLoad={animationCanvas}></canvas>
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