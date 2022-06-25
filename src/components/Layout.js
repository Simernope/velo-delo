import {Outlet} from 'react-router-dom'
import Header from './Header'

const Layout = ({ handleCart, orderLen }) => {
  return(
    <>
      <Header handleCart={handleCart} orderLen={orderLen}/>
      <Outlet />
    </>
  )
}

export default Layout
