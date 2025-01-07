"use client"

import { TextInput } from "@sio-it/ui-kit"
import { useState } from "react"

export const ClientComponents = () => {

  const [ value, setValue ] = useState("");
  return(
    <TextInput name="hei" onChange={(e) => setValue(e.target.value)} value={value}/>
  )
}
