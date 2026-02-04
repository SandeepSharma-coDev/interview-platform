import { SignedIn, SignInButton, SignedOut, UserButton, SignOutButton, useUser } from '@clerk/clerk-react'
import { Route, Routes } from 'react-router'
import { Toaster } from "react-hot-toast"
import HomePage from './pages/HomePage'

function App() {
  const { isSignedIn } = useUser(); // useUser is a clerk hook

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />


      </Routes>

      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  )
}
export default App
