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

import { Box, Flex, useAccordion } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useLocation } from 'react-router'

const Pagelayout = ({children}) => {
    const {pathname} = useLocation()
  return (
    <Flex>
        {/* Sidebar on left */}
        {pathname !== '/auth' ? (
            <Box w={{base: "70px", md: "240px"}}>
                <Sidebar/>
            </Box>
        ) : null}
        {/* the page content on right */}
        <Box flex={1} w={{base: "calc(100% - 70px)", md: "calc(100% - 240px)"}}>
            {children}
        </Box>
    </Flex>
  )
}

export default Pagelayout
