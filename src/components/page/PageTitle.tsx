import { As, ComponentWithAs, Text, TextProps } from "@chakra-ui/react"

interface PageTitleProps extends Omit<ComponentWithAs<"p", TextProps>, 'as'> {
  children: string
  as?: As<any>,
}

export default function PageTitle({ children: title, as = 'h1', ...textProps }: PageTitleProps) {
  return (
    <Text as={as} fontSize="4xl" fontWeight="bold" my="20px" color="purple.400" textAlign="center" {...textProps}>{title}</Text>
  )
}