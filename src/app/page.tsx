import { Spacer, Button } from "@sio-it/ui-kit"
export default function Home() {
  const handleClick = async () => {
    "use server"

    console.log('click')
  }
  return (
    <>
      <Spacer />
      <Button variant="primary">Hei</Button>
    </>
  );
}
