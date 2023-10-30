
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'
import ReactToast from './components/ReactToast/ReactToast'

function App() {

  return (
    <>
      <div className='container'>
        <Navbar />
        <Blogs />
      </div>
      <ReactToast />
    </>
  )
}

export default App
