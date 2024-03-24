import React, { useEffect } from 'react'

/* const Home = () => {

    const mouseOverFunc = (e)=>{
        console.log(e.clientX)
        console.log(e.clientX)
    }

    useEffect(() => {
      document.addEventListener("mousemove",
      mouseOverFunc)
    
      return () => {
        document.removeEventListener("mousemove",
        mouseOverFunc) //event listenet is remover when component unmounts
       }
    }, [])
    

  return (
    <div>
      Home
    </div>
  )
} */

const mouseOverFunc = (e)=>{
    console.log(e.clientX)
    console.log(e.clientX)
}

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        document.addEventListener("mousemove",
        mouseOverFunc)
    }
    componentWillUnmount(){
        document.removeEventListener("mousemove",
        mouseOverFunc)
    }
    render(){
        return <div>Home</div>
    }
}

export default Home
