import Head from 'next/head'
import A from '../components/A'
import MainContainer from '../components/MainContainer'

const Index = () => {
  return (
    <MainContainer
      title={'Главная страница'}
      keywords={'главная, главная страница'}
    >
      <div>
        <h1>Главная страница</h1>
      </div>
    </MainContainer>
  )
}

export default Index
