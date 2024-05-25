import PropTypes from "prop-types"
function HeaderText({children}) {
  return (
    <p className="section-header--text">{children}</p>
  )
}

HeaderText.propTypes = {
    children: PropTypes.node.isRequired
}

export default HeaderText