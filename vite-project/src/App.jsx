import { Route, Routes } from "react-router"
import Homepage from "./Pages/Homepage/Homepage"
import Authpage from "./Pages/Authpage/Authpage"
import Pagelayout from "./Layout/Pagelayout/Pagelayout"
import Profilepage from "./Pages/Profilepage/Profilepage"
import Models from "./Pages/Models/Models"
import Textures from "./Pages/Textures/Textures"
import Hdri from "./Pages/HDRIs/Hdri"

function App() {
  return (
    <Pagelayout>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/auth" element={<Authpage/>}/>
        <Route path="/models" element={<Models/>}/>
        <Route path="/textures" element={<Textures/>}/>
        <Route path="/hdris" element={<Hdri/>}/>
        <Route path="/:username" element={<Profilepage/>}/>
      </Routes>
    </Pagelayout>
  )
}

export default App