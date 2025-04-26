import Head from "next/head"
import A from "./A"

const MainContainer = ({children, keywords, title}) => {
  return (
    <>
    <Head>
        <meta keywords={'ulbi-tv, next.js' + keywords} />
        <title>{title}</title>
      </Head>
    <div className="navbar">
          <A text="Главная" href="/" />
          <A text="Пользователи" href="/users" />
        </div>
        <div>{children}</div>
        <style jsx>
          {`
            .navbar {
              display: flex;
              width: 100%;
              justify-content: space-between;
              gap: 10px;
              background: rgb(211, 145, 23);
              padding: 10px;
            }
          `}
        </style>
    </>
  )
}

export default MainContainer