import React, { Suspense, lazy } from 'react'
import style from './index.module.scss'
import ErrorBoundary from 'antd/es/alert/ErrorBoundary'
import { Spin } from 'antd'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('@/pages/Home'))
const Anime = lazy(() => import('@/pages/Anime'))
const AnimeDetail = lazy(() => import('@/pages/AnimeDetail'))

const Main: React.FC = () => (
  <main className={style.main}>
    <ErrorBoundary>
      <Suspense
        fallback={
          <Spin size="large" tip="Loading...">
            <div className={style.spinBox}></div>
          </Spin>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/anime/detail/:id" element={<AnimeDetail />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  </main>
)

export default Main
