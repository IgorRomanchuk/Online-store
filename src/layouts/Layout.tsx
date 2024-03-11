import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer'
import Header from '../components/Header'
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
