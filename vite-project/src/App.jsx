import { Route, Routes } from "react-router"
import Homepage from "./Pages/Homepage/Homepage"
import Authpage from "./Pages/Authpage/Authpage"
import Pagelayout from "./Layout/Pagelayout/Pagelayout"
import Profilepage from "./Pages/Profilepage/Profilepage"

function App() {
  return (
    <Pagelayout>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/auth" element={<Authpage/>}/>
        <Route path="/:username" element={<Profilepage/>}/>
      </Routes>
    </Pagelayout>
  )
}

export default App