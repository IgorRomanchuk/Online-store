import { Outlet } from 'react-router-dom'

import Footer from '../footer'
import Header from '../header'
import s from './layout.module.css'

const Layout = () => {
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

export default Layout
