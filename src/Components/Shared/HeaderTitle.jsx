import PropTypes from 'prop-types'

function HeaderTitle({children}) {
  return (
    <h2 className="section-header--title">{children}</h2>
  )
}


HeaderTitle.propTypes = {
    children : PropTypes.node.isRequired
}
export default HeaderTitle