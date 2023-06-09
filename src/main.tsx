import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './styles/themes/colors.ts'
import { ClientProvider } from './contexts/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <ClientProvider>
          <App />
        </ClientProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
