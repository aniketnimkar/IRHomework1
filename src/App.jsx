import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./componants/Header"
import Footer from "./componants/Footer"

export default function App() {
  return (
    <>
      <Header/>
    <main>
       <div className='mx-5 mb-5'>
         <h1 className='display-4'>Overview</h1>
         <img
           src="https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           className="rounded img-fluid"
         />
       </div>
      <div className='text-wrap container' >
        <p>The Taj Mahal is one of the most famous monuments in the world. It is
          located in Agra, India, and is a symbol of eternal love. This stunning
          white marble mausoleum was built by Mughal Emperor Shah Jahan in memory
          of his beloved wife Mumtaz Mahal.
        </p>
        <p>
          The Taj Mahal is not only a UNESCO World Heritage Site but also
          considered one of the most beautiful architectural master pieces in
          history.
        </p>
      </div>
    </main>
      <Footer/>
    </>
  )
}
