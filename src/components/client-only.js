import React, { useEffect, useState } from "react"

/*
This component is used to avoid state flickers before the client-side JS is loaded.
To use, simply wrap any components which require client-side globals inside the <ClientOnly> component.
Adapted from: https://egghead.io/lessons/react-avoiding-state-flickers-in-gatsby-applications
*/
export const ClientOnly = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => setHasMounted(true), [])
  return (!hasMounted ? null : children)
}
