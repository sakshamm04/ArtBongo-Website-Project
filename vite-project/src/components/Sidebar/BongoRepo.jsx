import { Box, Link, Tooltip } from "@chakra-ui/react";
import { MdSnippetFolder } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";

const BongoRepo = () => {
	return (
		<Tooltip
			hasArrow
			label={"BongoRepo"}
			placement='right'
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
			<Link
				display={"flex"}
				to={"/bongorepo"}
				as={RouterLink}
				alignItems={"center"}
				gap={4}
				_hover={{ bg: "whiteAlpha.400" }}
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}
			>
				<MdSnippetFolder size={25} />
				<Box display={{ base: "none", md: "block" }}>BongoRepo</Box>
			</Link>
		</Tooltip>
	);
};

export default BongoRepo;