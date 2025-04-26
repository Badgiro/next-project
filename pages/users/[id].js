import React from 'react'
import { useRouter } from 'next/router'

const id = ({user}) => {
    const {query} = useRouter()
   
  return (
    <>
    <h1>Ползователь с id {query.id}</h1>
    <div>имя пользователя {user.name}</div>
    </>
  )
}

// Указываем какие id должны быть сгенерированы на этапе сборки
export async function getStaticPaths() {
  // Здесь можно получить список пользователей с API
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  // Создаем paths для всех пользователей
  const paths = users.map(user => ({
      params: { id: user.id.toString() }
  }))

  return {
      paths,
      fallback: false // или true, или 'blocking' - см. пояснения ниже
  }
}

export default id
export async function getStaticProps({params}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await res.json()

  return {
    props: { user },
  }
}