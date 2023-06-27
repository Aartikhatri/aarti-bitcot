import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import NewConatct from './componant/NewConatct.jsx'
import ContactInfo from './componant/ContactInfo.jsx'
import Update from './componant/Update.jsx'
import View from './componant/View.jsx'

import { store } from './reduxfile/store.js'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const AppRouter = createBrowserRouter([{
  path : "/" ,
  element : <App /> , 
  children : [
     {
      path : '/' , 
      element : <ContactInfo />
    },
   {
    path : '/add' , 
    element : <NewConatct />
  },
  {
    path : '/edit/:id' , 
    element : <Update />
  },
  {
    path : '/view/:id' , 
    element : <View />
  },
  {
    path : '/searchResult' , 
    element : <View />
  },

 ]

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <RouterProvider router={AppRouter} />
  </Provider>

)
