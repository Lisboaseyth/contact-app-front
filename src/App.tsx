import { ToastContainer } from 'react-toastify'
import './App.css'
import { RoutesPages } from './routes'
import 'react-toastify/dist/ReactToastify.min.css'


function App() {

  return (
    <>
      <RoutesPages />
      <ToastContainer />
    </>
  )
}

export default App
