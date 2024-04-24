import { Navigate, Route, Routes } from "react-router"
import Homepage from "./Pages/Homepage/Homepage"
import Authpage from "./Pages/Authpage/Authpage"
import Pagelayout from "./Layout/Pagelayout/Pagelayout"
import Profilepage from "./Pages/Profilepage/Profilepage"
import Models from "./Pages/Models/Models"
import Textures from "./Pages/Textures/Textures"
import Hdri from "./Pages/HDRIs/Hdri"
import BongoRepo from "./Pages/BongoRepo/BongoRepo"

import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase/firebase"

function App() {
  const [ authUser ] = useAuthState(auth)
  return (
		<Pagelayout>
			<Routes>
				<Route path='/' element={authUser ? <Homepage /> : <Navigate to='/auth' />} />
				<Route path='/auth' element={!authUser ? <Authpage /> : <Navigate to='/' />} />
        <Route path="/models" element={<Models/>}/>
        <Route path="/textures" element={<Textures/>}/>
        <Route path="/hdris" element={<Hdri/>}/>
        <Route path="/bongorepo" element={<BongoRepo/>}/>
        <Route path="/:username" element={<Profilepage/>}/>
      </Routes>
    </Pagelayout>
  )
}

export default App