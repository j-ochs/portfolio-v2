import React from 'react'

export const ClientOnly = ({ children }) => {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => setHasMounted(true), [])
  return (!hasMounted ? null : children)
}
