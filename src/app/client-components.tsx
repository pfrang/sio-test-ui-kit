"use client"

import { DatePicker, TextInput , Text } from "@sio-it/ui-kit"
import {  useState } from "react"

export const ClientComponents = () => {

  const [ value, setValue ] = useState("");


  const handler =(e) =>  {
    setValue(e.target.value)
  }
  return(
    <>
      {/* <input type="text" value={value} onChange={handler}/> */}
      <TextInput type="date" name="hei" onChange={handler} value={value} />
      <DatePicker isDateBlocked={(date) => {
        return false
      }} onChange={(date) => {
        console.log(date)}
      } />
    </>
  )
}
