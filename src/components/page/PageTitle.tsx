import { As, ComponentWithAs, Text, TextProps } from "@chakra-ui/react"

interface PageTitleProps extends Omit<ComponentWithAs<"p", TextProps>, 'as'> {
  children: string
  as?: As<any>,
}

export default function PageTitle({ children: title, as = 'h1', ...textProps }: PageTitleProps) {
  return (
    <Text as={as} fontSize="4xl" mb="20px" /* w="min-content"  */textAlign="center" {...textProps}>{title}</Text>
  )
}