import { Button, Icon,  Spacer, Text } from "@sio-it/ui-kit"
export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = async () => {
    "use server"

    console.log('click')
  }
  return (
    <>
      <Spacer paddingTop={4} />
      <Button color={"green.10"} padding={12} width={9} variant="primary" >Hei2</Button>
      <Text>Hei</Text>
      <Icon title="something" name="ArrowDown" color="#2EC961" height={20}/>
      {/* <Icons.ArrowDown color="#2EC961" /> */}
    </>
  );
}
