import { useRoutes} from "react-router-dom"
import Home from "./pages/Home"

const AppRoutes=()=>{
  let routes=useRoutes([
    {
      path:"/",
      element:<Home/>
    },
  ])
  return routes
}

const App = () => {
  return (
    <div className="my-0 mx-0 p-0">
      <AppRoutes/>
    </div>
  )
}

export default App