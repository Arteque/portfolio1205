import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun } from "@fortawesome/free-solid-svg-icons"

function ColorMode() {
  return (
    <>
        <div className="colorMode">
            <span className="text">Light Mode</span>
            <span className="icon"><FontAwesomeIcon icon={faSun} /></span>
        </div>
    </>
  )
}

export default ColorMode