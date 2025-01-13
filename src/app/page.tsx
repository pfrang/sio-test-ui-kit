import { Button, Icon,  Spacer, Text, Tooltip } from "@sio-it/ui-kit"
import { ClientComponents } from "./client-components";
import { Grid, GridItem } from "./grid";
export default function Home() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = async (e) => {
    "use server"
    console.log(e)
  }
  return (
    <>
      <Spacer paddingTop={4} />
      <Button onClick={handleClick} color={"green.10"} padding={12} width={9} variant="primary" >Hei2</Button>
      <Text tag="h3" padding={'1'} variant="button">Hei</Text>
      <Icon title="something" name="ArrowDown" color="#2EC961" />
      <Tooltip direction="right"  size="medium" variant="dark">
        <Text>HeiToolTip</Text>
      </Tooltip>
      <Grid>
        <GridItem >
          <Text tag="h3" padding={'1'} variant="button">Hei</Text>
        </GridItem>
      </Grid>
      <ClientComponents/>
      {/* <Icons.ArrowDown color="#2EC961" /> */}
    </>
  );
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
function TestServerSubmissionForm() {
  const handleClick = async (e: unknown) => {
    "use server"
    console.log(e)
  }
  <form action={handleClick}>
    {/* <TextInput name="hei" /> */}
    {/* <button type="submit">Submit</button> */}
    <Button type="submit" padding={12} width={9} variant="primary" >Submit</Button>
  </form>
}
