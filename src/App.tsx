import { ToastContainer } from 'react-toastify'
import './App.css'
import { RoutesPages } from './routes'
import 'react-toastify/dist/ReactToastify.min.css'
import { ResetStyles } from './styles/resetStyled'


function App() {

  return (
    <>
      <ResetStyles />
      <RoutesPages />
      <ToastContainer />
    </>
  )
}

export default App
