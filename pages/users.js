import { useState } from 'react'
import A from '../components/A'

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Петя' },
    { id: 2, name: 'Вася' },
  ])
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
