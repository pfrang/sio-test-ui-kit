import { Button, Flex, Grid, GridItem, Heading, Icon,  Spacer, Text, Tooltip, BlockQuote } from "@sio-it/ui-kit"
import { ClientComponents } from "./client-components";
import { Grid3 } from "./grid";
export default function Home() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = async (e) => {
    "use server"
    console.log(e)
  }
  return (
    <>
      <Heading level={1}>Spacer</Heading>
      <Spacer paddingTop={4} />
      <Heading level={1}>Button</Heading>
      <Button onClick={handleClick} padding={[6, 8]} variant="primary" >Hei2</Button>
      <Heading level={1}>Text</Heading>
      <Text tag="h3" content={<div>heiinni</div>} padding={'1'} variant="button">HeiUti</Text>

      Grid Tesr
      <Grid3 bgOpac={"violet.4"}>
        <Text tag="h3" padding={'1'} variant="button">Grid Testtt</Text>
      </Grid3>
      <Heading level={1}>Icon</Heading>
      <Icon title="something" name="ArrowDown" color="#2EC961" />
      <Heading level={1}>Tooltip</Heading>
      <BlockQuote
        quote="4 av 10 studenter har alvorlige psykiske plager."
        quotee="Fra SHOT-undersøkelsen 2018"
        background={"violetLight"}
      />
      <Tooltip direction="right"  size="medium" variant="dark">
        <Text content={<div>content</div>}>HeiToolTip</Text>
      </Tooltip>
      <Heading level={1}>Grid</Heading>
      <Grid>
        <GridItem border={"1px solid"} >
          <Text tag="h3" padding={'1'} variant="button">Hei</Text>
        </GridItem>
      </Grid>

      <Heading level={1}>Flex</Heading>
      <Flex flexDirection="column">
        <Text tag="h3" padding={"1"} variant="button">
          Flex
        </Text>
      </Flex>


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
