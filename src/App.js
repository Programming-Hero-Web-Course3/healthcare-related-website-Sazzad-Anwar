import { Route, Routes } from "react-router-dom"
import Error from "./Components/Error"
import HomePage from "./Screens/HomePage"


export default function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}
