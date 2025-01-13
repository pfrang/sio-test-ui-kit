"use client"

import { DatePicker, TextInput } from "@sio-it/ui-kit"
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
        return date.getTime() < new Date().getTime()
      }} onChange={(date) => {
        console.log(date)}
      } />
    </>
  )
}
