import React from 'react'
import ProductList from './components/productList'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import './App.css'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

function App () {
  return (
    <Provider store={store} >
      <ProductList />
    </Provider>
  )
}

export default App
