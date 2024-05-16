import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faComputer, faMoon, faCaretRight } from "@fortawesome/free-solid-svg-icons"


function ColorMode() {

  return (
    <>
        <div className="colorMode-container">
          <div className="colorMode-menu" >
              <div className="colorMode-content">
                <span className="text">Light mode</span>
                <span className="icon"><FontAwesomeIcon icon={faSun} /></span>
              </div>
              <FontAwesomeIcon icon={faCaretRight} />
          </div>
          <ul className="colorMode-dropdown">
              <li>
                <span className="text">Light mode</span>
                <span className="icon"><FontAwesomeIcon icon={faSun} /></span> 
              </li>
              <li>
                <span className="text">Dark mode</span>
                <span className="icon"><FontAwesomeIcon icon={faMoon} /></span> 
              </li>
              <li>
                <span className="text">System color</span>
                <span className="icon"><FontAwesomeIcon icon={faComputer} /></span> 
              </li>
          </ul>
        </div>
    </>
  )
}

export default ColorMode