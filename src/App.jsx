import Footer from "./components/shared/Footer/Footer"
//import AboutMe from "./pages/AboutMe/AboutMe"
import Banner from "./pages/Banner/Banner"
import MyServices from "./pages/MyServices/MyServices"
import SslPhoto from "./pages/SslPhoto/SslPhoto"



function App() {

  return (
    <>
    <div  
    // style={{
    //         background:
    //           `url(),
    //           backgroundSize: 'cover',
    //           backgroundPosition: 'center',
    //           height: '100vh'
    //       }}
          >
           <Banner></Banner>
           <MyServices></MyServices>
           <SslPhoto></SslPhoto>
           <Footer></Footer>
        

    </div>
     
    </>
  )
}

export default App
