import { Provider } from "react-redux"
import { store } from "./App/Store"
import Navbar from "./component/Navbar/Navbar"
import Create from "./component/create/Create"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {


  return (
    <>
    <Provider store={store}>
      <BrowserRouter >
        
        <Navbar />

        <Routes >
          <Route exact path = '/' element = {<Create />} />
        </Routes>
        
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
