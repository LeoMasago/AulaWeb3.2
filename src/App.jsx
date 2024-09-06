import ConteudoPrincipal from './Componentes/ConteudoPrincipal';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';
import logoVite from './assets/vite.svg';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <img src={logoVite} />
      <Outlet/>
      <Footer />
    </>
  )
}

export default App
