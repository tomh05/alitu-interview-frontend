import { Flex } from "@chakra-ui/layout"
import { ReactElement } from "react"

interface PageProps {
  children: (ReactElement | null) | (ReactElement | null)[]
}

export default function Page({ children }: PageProps) {
  return (
    <Flex direction="column" margin="0 200px" minHeight="100vh">
      {children}
    </Flex>
  )
}
