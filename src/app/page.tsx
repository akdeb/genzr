import Translate from "@/components/Translate";
import { Container, Flex, Heading } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Flex direction="column" gap="4" width={"100%"} align="center">
            <Heading size="9" color="purple">Genzr</Heading>
            <Heading size="6" color="purple">Translate this!</Heading>
            <Translate />
          </Flex>
    </main>
  )
}
