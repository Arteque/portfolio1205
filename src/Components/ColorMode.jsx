import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faComputer, faMoon, faCaretRight } from "@fortawesome/free-solid-svg-icons"


function ColorMode() {

  const [openMenu, setOpenMenu] = useState(false)

  const [modeText, setModeText] = useState({
    text: localStorage.getItem("colormode")
  })
  const setLocalStorageColorMode = (item) => {
    localStorage.setItem("colormode", item)
  }
 useEffect(() => {
  const dropDownItems = document.querySelectorAll(".colorMode-dropdown li")
  dropDownItems.forEach(item => {
    item.addEventListener("click", (e) => {
      item.parentElement.querySelector(".active").classList.remove("active")
      item.classList.add("active")
      e.preventDefault()
      document.body.dataset.colormode = item.firstElementChild.innerText.toLowerCase()
      // setLocalStorageColorMode(item.dataset.index)
      setLocalStorageColorMode(item.firstElementChild.innerText.toLowerCase())

      setOpenMenu(false)
      
      setModeText({text:item.firstElementChild.innerText})
    })
  })
 },[])

  return (
    <>
        <div className="colorMode-container">
          <div className={`colorMode-menu ${openMenu ? 'open':'close'}`} 
             onClick={() => {setOpenMenu((prev) => prev = !prev)}}
             
             >
              <div className="colorMode-content">
                <span className="text">{modeText.text}</span>
              </div>
              <div className="icon-container">
                <FontAwesomeIcon icon={faCaretRight} />
              </div>
          </div>
          <ul className={`colorMode-dropdown ${openMenu ? 'open' : ''}`}>
              <li className="active" data-index="0" >
                <span className="text">Light</span>
                <span className="icon"><FontAwesomeIcon icon={faSun} /></span> 
              </li>
              <li data-index="1">
                <span className="text">Dark</span>
                <span className="icon"><FontAwesomeIcon icon={faMoon} /></span> 
              </li>
              <li data-index="2">
                <span className="text">System</span>
                <span className="icon"><FontAwesomeIcon icon={faComputer} /></span> 
              </li>
          </ul>
        </div>
    </>
  )
}

export default ColorMode