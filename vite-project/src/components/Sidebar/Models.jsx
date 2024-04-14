import { Box, Link, Tooltip } from "@chakra-ui/react";
import { IoLogoModelS } from "react-icons/io";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
	return (
		<Tooltip
			hasArrow
			label={"Home"}
			placement='right'
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
			<Link
				display={"flex"}
				to={"/models"}
				as={RouterLink}
				alignItems={"center"}
				gap={4}
				_hover={{ bg: "whiteAlpha.400" }}
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}
			>
				<IoLogoModelS size={25} />
				<Box display={{ base: "none", md: "block" }}>Models</Box>
			</Link>
		</Tooltip>
	);
};

export default Home;