import React from 'react'
import { useRouter } from 'next/router'

const id = () => {
    const {query} = useRouter()
   
  return (
    <h1>Ползователь с id {query.id}</h1>
  )
}

export default id