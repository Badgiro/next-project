import { useState } from 'react'
import A from '../components/A'
import MainContainer from '../components/MainContainer'

const Users = ({ users }) => {
  return (
    <MainContainer title={'Пользователи'} keywords={'пользователи, пользователи'}>
      <h1>Список пользователей</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <A text={user.name} href={`/users/${user.id}`} />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default Users

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return {
    props: { users },
  }
}
