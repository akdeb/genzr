import { Container, Flex, Heading } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container size="4">
          <Flex direction="column" gap="4" align="center">
            <Heading size="8">Genzr</Heading>
            <Heading size="4">Translate this!</Heading>
          </Flex>
        </Container>
    </main>
  )
}
