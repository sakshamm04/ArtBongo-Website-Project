import { Box, Link, Tooltip } from "@chakra-ui/react";
import { FaMountainSun } from "react-icons/fa6";
import { Link as RouterLink } from "react-router-dom";

const Hdri = () => {
	return (
		<Tooltip
			hasArrow
			label={"Hdri"}
			placement='right'
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
			<Link
				display={"flex"}
				to={"/hdris"}
				as={RouterLink}
				alignItems={"center"}
				gap={4}
				_hover={{ bg: "whiteAlpha.400" }}
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}
			>
				<FaMountainSun size={25} />
				<Box display={{ base: "none", md: "block" }}>HDRIs</Box>
			</Link>
		</Tooltip>
	);
};

export default Hdri;