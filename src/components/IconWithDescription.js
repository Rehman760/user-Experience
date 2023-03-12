import { Icon, Tooltip, Link } from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";

function IconWithDescription({ tooltip, link }) {
  return (
    <Tooltip label={tooltip} aria-label={tooltip}>
      <Link href={link} isExternal>
        <Icon as={FaInfoCircle} boxSize={6} color="gray.500" _hover={{color: "blue.500"}} />
      </Link>
    </Tooltip>
  );
}

export default IconWithDescription;