import { Provider } from "react-redux"
import { store } from "./App/Store"


function App() {


  return (
    <>
    <Provider store={store}>
     <h1> Reack Redux </h1>
     </Provider>
    </>
  )
}

export default App
