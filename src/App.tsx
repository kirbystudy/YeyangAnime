import './App.scss'
import { ConfigProvider } from 'antd'
import Header from './layout/Header'
import Main from './layout/Main'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#f1b3be',
          colorPrimaryHover: '#ffc0cb',
        },
      }}
    >
      <div className="app">
        <Header></Header>
        <Main></Main>
      </div>
    </ConfigProvider>
  )
}

export default App
