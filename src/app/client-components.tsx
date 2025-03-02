"use client"

import { Collapsible, DatePicker, Accordion } from "@sio-it/ui-kit/client"
import { TextInput, Flex, Icons, Heading } from "@sio-it/ui-kit/server"
import {  useState } from "react"

export const ClientComponents = () => {

  const [ value, setValue ] = useState("");


  const handler =(e) =>  {
    setValue(e.target.value)
  }
  return(
    <>


      {/* <input type="text" value={value} onChange={handler}/> */}
      <Heading level={1}>TextInput</Heading>
      <TextInput type="date" name="hei" onChange={handler} value={value} />
      <Heading level={1}>DatePicker</Heading>
      <DatePicker locale="no" isDateBlocked={(date) => {
        return date.getTime() < new Date().getTime()
      }} onChange={(date) => {
        console.log(date)}
      } />
      <Heading level={1}>Collapsible</Heading>
      <Collapsible variant="card" heading="Heading" content="Content" />

      <Heading level={1}>Accordion</Heading>
      <Accordion variant="plain" items={[
        {
          heading: "Heading",
          content: "Content",
          renderCloseIcon: () => (
            <Flex>
              <Icons.BigChevronDown />
            </Flex>
          ),
          renderOpenIcon: () => (
            <Flex>
              <Icons.BigChevronUp />
            </Flex>
          ),
        },
      ]}/>
    </>
  )
}
