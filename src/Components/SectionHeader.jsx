import PropTypes from 'prop-types'


import "../Styles/SectionHeader.scss"
function SectionHeader({children}) {
  return (
    <header className="section-header">
        {children}
    </header>
  )
}


SectionHeader.propTypes={
    children: PropTypes.node.isRequired
}

export default SectionHeader