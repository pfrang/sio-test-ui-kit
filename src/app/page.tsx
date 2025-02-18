import { Button, Flex, Grid, GridItem, Heading, Icon,  Spacer, Text, Tooltip, BlockQuote, RichText } from "@sio-it/ui-kit"
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
      <Grid3 background={"violet.4"}>
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
      </Tooltip>      <RichText html="<a>Hei</a>" />
      <RichText
        html={
          '<ol>\n\t<li>Still <u>spørsmål</u> og få svar - helt anonymt</li>\n\t<li>Få råd fra psykolog, lege, fysioterapeut, tannlege og helsesykepleier</li>\n\t<li>Les andres spørsmål og svar</li>\n</ol>\n\n<p><a href="https://google.com">Se og still spørsmål på Studenter spør</a></p>\n<h3>Dette er en h3</h3><p>Den gode nyheter er at du kan få hjelp - SiO Psykisk helse- og rådgivningstjenesten er et lavterskeltilbud for deg som er student i SiO.</p><h2>Also a title</h2><p>Her får du treffe rådgivere og psykologer med spisskompetanse på fagområder som er relevante deg som er student.<br />\n<br />\nHusk at ingen problemer er for små eller for store. Vi hjelper deg med alt fra stress, ensomhet, relasjoner, sorg, dårlig selvtillit, økonomi, studiemestring, nedstemthet, angst, overgrep, rus eller mobbing. For å nevne noen.</p>\n\n<p><strong>Alle studenter i SiO kan bruke våre tilbud:</strong></p>\n\n<ul>\n\t<li>Samtale med rådgiver (kliniske sosionomer og pedagoger)</li>\n\t<li>Parsamtale med rådgiver</li>\n\t<li>Korttidsbehandling med psykolog, psykiater eller psykomotorisk fysioterapeut</li>\n\t<li>Samtale med helsesykepleier</li>\n\t<li>Kurstilbud</li>\n\t<li>Studenter spør (anonym spørsmål- og svartjeneste)</li>\n\t<li>Selvhjelpsverktøy og ressurser (filmer, artikler, lydfiler mm)</li>\n</ul>\n'
        }
      />


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
