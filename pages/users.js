import { useState } from 'react'
import A from '../components/A'

const Users = ({users}) => {
    

  return (
    <div>
      <div className="links">
        <A text="Главная" href="/" />
        <h1>Список пользователей</h1>
      </div>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <A text={user.name} href={`/users/${user.id}`} />
          </li>
        ))}
      </ul>
      <styles jsx>
        {' '}
        {`
      
      `}
      </styles>
    </div>
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
