import { Outlet } from 'react-router-dom'
import TopHeader from './Components/pages/Utils/TopHeader';
import Navber from './Components/pages/Utils/Navber';
import Footer from './Components/pages/Utils/Footer';

function App() {

  return (
    <>
      <TopHeader />
      <Navber />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
