// import { Box, Flex, useAccordion } from '@chakra-ui/react'
// import React from 'react'
// import Sidebar from '../../components/Sidebar/Sidebar'
// import { useLocation } from 'react-router'

// const Pagelayout = ({children}) => {
//     const {pathname} = useLocation()
//   return (
//     <Flex>
//         <Box flex={1} w={{base : "calc(100%-70px)",md : "calc(100%-240px)"}}>
//             {children}
//         </Box>
//         {pathname !== '/auth' ? (
//             <Box w={{base : "70px", md : "240px"}}>
//                 <Sidebar />
//             </Box>
//         ) : null}
//     </Flex>
//   )
// }

// export default Pagelayout

import { Box, Flex, Spinner, useAccordion } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useLocation } from 'react-router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase'
import Navbar from '../../components/Navbar/Navbar'

const Pagelayout = ({children}) => {
    const {pathname} = useLocation()
    const [user, loading, error] = useAuthState(auth);
    const canRendersidebar = pathname !== "/auth" && user;
    const canRenderNavbar = !user && !loading && pathname !== "/auth";
    
    const checkingUserIsAuth = !user && loading;
	if (checkingUserIsAuth) return <PageLayoutSpinner />;
  return (
    <Flex flexDir={canRenderNavbar ? "column" : "row"}>
        {/* Sidebar on left */}
        {canRendersidebar ? (
            <Box w={{base: "70px", md: "240px"}}>
                <Sidebar/>
            </Box>
        ) : null}
        {/* NavBar */}
        {canRenderNavbar ? <Navbar /> : null}
        {/* the page content on right */}
        <Box flex={1} w={{base: "calc(100% - 70px)", md: "calc(100% - 240px)"}} mx={"auto"}>
            {children}
        </Box>
    </Flex>
  )
}

export default Pagelayout
const PageLayoutSpinner = () => {
	return (
		<Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
			<Spinner size='xl' />
		</Flex>
	);
};