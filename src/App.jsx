
import './App.css'
import Layout from './Design/Layout'
import Header from './Components/Header'
import Footer from './Components/Footer'

 import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
     <Header/>
     <div className='main-container'>
     <Layout/>
     </div>
      
     <Footer />
  
    </>
  )
}

export default App
