import { Button, Spacer, Text } from "@sio-it/ui-kit"
export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = async () => {
    "use server"

    console.log('click')
  }
  return (
    <>
      <Spacer paddingTop={4} />
      <Button variant="primary">Hei</Button>
      <Text>Hei</Text>
    </>
  );
}
