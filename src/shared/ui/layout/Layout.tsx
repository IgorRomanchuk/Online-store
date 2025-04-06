import Footer from '@shared/ui/footer'
import Header from '@shared/ui/header'
import { Outlet } from 'react-router-dom'

import s from './layout.module.scss'

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
