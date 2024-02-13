import {  useSelector } from 'react-redux'
import './App.css'
import Header from './components/Header'
import NotesList from './components/NotesList'
import Login from './components/Login'

function App() {

  const isAuth = useSelector(state => state.auth.isAuthenticated)
  
  return (
    <>
    <Header/>
    {isAuth ? <NotesList/> : <Login/>}
    </>
  )
}

export default App
