import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider  } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Productcard from './components/ProductCard/Productcard.jsx'
import Kids from './components/Kids/Kids.jsx'
import Men from './components/Men/Men.jsx'
import ProductDetail from './components/ProductDetail/ProductDetail.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Cart from './components/Cart/Cart.jsx'
import Wishlist from './components/Wishlist/Wishlist.jsx'

const Grocery = lazy(()=> import('./components/Grocery/Grocery.jsx')) // This isn't a normal import, this is a dynamic import(or, lazy loading)
// Note:- We can create many lbunlders like thins uing code splitting/lazy loading.
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element={<App />}>
      <Route index element={<Home />} />
      <Route path="men" element={<Men />} />
      <Route path='products' element={<Productcard />} />
      <Route path="women" element={<App />} />
      <Route path="kids" element={<Kids />} />
      <Route path="product/:id" element={<ProductDetail />} /> 
      {/* Note:- Components imported using lazy must be put within the Suspense to avoid errors.  */}
      <Route path='about' element={<AboutUs  address={"Narayanpur, Jamtara"} />}/>
      <Route path='grocery' element={<Suspense fallback={<h1>Loading the Grocery App..</h1>}> <Grocery/> </Suspense>} />
      <Route path='cart' element={<Cart />}/>
      <Route path='wishlist' element={<Wishlist />} />
      <Route path="*" element={<h1 className='text-3xl font-bold text-red-500'>404 Not Found</h1>} />
    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={appRouter} />
  </StrictMode>,
)
