import React from 'react'
import { useRouter } from 'next/router'
import MainConteainer from '../../components/MainContainer'

const id = ({user}) => {
    const {query} = useRouter()
   
  return (
    <MainConteainer title= {'Пользователь ' + user.name} keywords={'пользователь, ' + user.name}>
    <h1>Страница пользователя</h1>
    <h2>Ползователь с id {query.id}</h2>
    <div>имя пользователя {user.name}</div>
    </MainConteainer>
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