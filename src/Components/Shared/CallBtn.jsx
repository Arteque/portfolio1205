import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import "../../Styles/Call.scss" 


function CallBtn({path, children}) {
  return (
    <div className="call">
        <Link to={path} defaultValue="/">
            {children}
        </Link>
    </div>
  )
}

CallBtn.propTypes = {
    path: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}



export default CallBtn