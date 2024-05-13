function Burger() {

const handleClick= (e) => {
    e.preventDefault()

    document.body.classList.toggle("open")
} 


  return (
    <div className="burger-menu" role="button" onClick={(e) => {handleClick(e)}}>
        <span></span><span></span><span></span>
    </div>
  )
}

export default Burger