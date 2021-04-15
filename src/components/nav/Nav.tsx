import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import AlituLogo from './AlituLogo';

export default function Header() {
  return (
    <nav>
      <Box d="flex" alignItems="center" justifyContent="space-between" bg="purple.300" height={100} paddingX="8">
        <AlituLogo />
        <UnorderedList d="flex" gridGap={10} listStyleType="none">
          <ListItem color="white">
            <Link to={`/episodes`}>Episodes</Link>
          </ListItem>
          <ListItem color="white">
            <Link to={`/library`}>Library</Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </nav>
  )
}
