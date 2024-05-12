import { useRouteError } from "react-router-dom"


function Error() {

    const error = useRouteError()
    console.log(error)

  return (
    <div id="error-container">
        <h1>Ooops!</h1>
        <p>Eine Fehler ist aufgetreten!</p>
        <p>
            <i>
                {error.statusText || error.message}
            </i>
        </p>
    </div>
  )
}

export default Error