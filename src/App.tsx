import { Route, Routes } from 'react-router-dom'
import { ProductsPage } from './pages/ProductsPage'
import { AboutPage } from './pages/aboutPage'
import { Navigation } from './components/Navigation'


export function App() {

  return (

    <>

     <Navigation />
        <Routes>
          <Route path='/' element={ <ProductsPage /> }/>
          <Route path='/about' element={ <AboutPage /> }/>
       </Routes>
    </>
  )


}


