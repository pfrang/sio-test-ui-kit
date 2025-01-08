"use client"

import { TextInput  } from "@sio-it/ui-kit"
import {  useState } from "react"

export const ClientComponents = () => {

  const [ value, setValue ] = useState("");


  const handler =(e) =>  {
    setValue(e.target.value)
  }
  return(
    <>
      {/* <input type="text" value={value} onChange={handler}/> */}
      <TextInput name="hei" onChange={handler} value={value} />
      {/* <TextareaInput name="hei" onChange={handler} value={value}/> */}
    </>
  )
}
