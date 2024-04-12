import Header from "../components/Header"
import GetComments from "../components/GetComments"

const home = () => {
  return (
    <div className="bg-gray-100 my-0 mx-0 p-0">
      <Header/>
      <GetComments/>
    </div>
  )
}

export default home