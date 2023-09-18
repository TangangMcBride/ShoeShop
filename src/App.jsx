import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import theme from './styles/theme'
import Button from '@mui/material/Button';
import { Container, ThemeProvider } from '@mui/material';
import Appbar from './components/appbar'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => { document.title = `ShoeShop - Home` }, [])

  return (
   <ThemeProvider theme={theme}>
   <Container
   maxWidth="xl"
    sx={{
      background: '#000'
    }}
   ><Appbar></Appbar>
   


   </Container>

     </ThemeProvider>
  )
}

export default App
