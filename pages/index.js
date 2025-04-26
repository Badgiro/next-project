import Head from 'next/head'
import A from '../components/A'

const Index = () => {
  return (
    <>
    <Head>
      <meta keywords='ulbi-tv, next.js'> </meta>
      <title>Главная страница</title>
    </Head>
     <div>
      <div className="links">
        <A text="Главная" href="/" />
        <A text="Пользователи" href="/users" />
      </div>

      <h1>Главная страница</h1>
      <style jsx>
        {`
          .links {
            display: flex;
            width: 100%;
            justify-content: space-between;
            gap: 10px;
            background: rgb(211, 145, 23);
            padding: 10px;
          }
        `}
      </style>
    </div></>
   
  )
}

export default Index
