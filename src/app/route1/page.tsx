import { ArticleHeading } from "@sio-it/ui-kit/server"
import { styled } from "@sio-it/ui-kit/jsx"

const Div = styled('div', {
  base: {
    padding: '10px',
    gridSpan: [1,4,6]
  }
})
export default async function Page() {

  return (
    <>
  
      <Div>hei</Div>
      <ArticleHeading headingComponent={<div>hei</div>}>hei</ArticleHeading>
    </>
  )
}