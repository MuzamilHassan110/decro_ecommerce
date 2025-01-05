// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "./store.js";
import { Provider } from 'react-redux';
 import {  BrowserRouter} from "react-router-dom";
import React from 'react';
import ScrollToTop from './ScrollToTop.jsx';
// import Layout from './components/Layout.jsx';
// import Home from './Home/Home.jsx';
//  import ShoppingCard from "./components/ShoppingCard/ShoppingCard.jsx"
// import Main from "./components/Details/Main.jsx"
// import Order from './components/Order/Order.jsx';
// import Shop from './components/Shop/Shop.jsx';

// import { loadProduct } from './components/api/loadProduct.js';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element:  <Home />
//       },
//       {
//         path: "detail",
//         element: <Main />
//       },
//       {
//         path: "/shopping_card",
//         element: <ShoppingCard />
//       }
//     ]
//   }
// ])



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element= {<Layout />}>
//       <Route path='/' element = {<Home />} />
//       <Route path='/detail' element = {<Main />}/>          
//       <Route path='/detail/shopping_card' element = {<ShoppingCard />}/>    
//       <Route path='/detail/shopping_card/order' element = {<Order />}/>  
//       </Route>
//   )
// )

 {/* <RouterProvider router = {router}/> */}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <BrowserRouter>
    <Provider store={store}>
    <ScrollToTop />
      <App />
    </Provider>
    {/* <Shop /> */}
    </BrowserRouter>
    </React.StrictMode>
)
