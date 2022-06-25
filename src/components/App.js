import Homepage from '../pages/Homepage'
import { Routes, Route } from 'react-router-dom'
import Contacts from '../pages/Contacts'
import Blog from '../pages/Blog'
import Velodiy from '../pages/Velodiy'
import ToDo from '../pages/todoPage/ToDo'

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/diy" element={<Velodiy/>}/>
        <Route path="/todo" element={<ToDo/>}/>
      </Routes>
    </>
  )
}

export default App
