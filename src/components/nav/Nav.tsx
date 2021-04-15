import { Box } from '@chakra-ui/react';
import React from 'react';
import AlituLogo from './AlituLogo';

export default function Header() {
  return (
    <nav>
      <Box d="flex" alignItems="center" bg="purple.300" height={100} paddingX="8">
        <AlituLogo />
      </Box>
    </nav>
  )
}