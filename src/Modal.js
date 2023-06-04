import React,{useState, useEffect} from 'react'
import "./Modal.css"

const Modal_Styles = {
    position: 'fixed',
    top:'50%',
    left:'50%',
    width:'50%',
    height:'50%',
    transform:'translate(-50%,-50%)',
    backgroundColor:'rgb(1,1,1)',
    // padding: '50px',
    zIndex:950,
    border: "10px solid black",
    borderRadius: ".6rem"
}
const Overlay_Style = {
    position: 'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'rgba(0,0,0,.7)',
    zIndex:900
}

export default function Modal({open, onClose, data,findRandomMovie}) {
    // const [isLoading,setIsLoading] = useState(false)
    const [bImage,setBImage] = useState()
    
    useEffect(()=>{
        if(data?.data?.backdrop_path){
            setBImage(`https://image.tmdb.org/t/p/original/${data?.data.backdrop_path}`)
        }else{
            setBImage('geekflixblack.png')
        }
    },[data])
    
    if(!open) return null
  return (
    <>
    <div style={Overlay_Style}/>
    <div style={Modal_Styles}>
        
    <div className='modalBanner' style={{ 
            backgroundSize:"cover",
            backgroundImage: `url(${bImage})`,
            backgroundPosition:"center center"
    }}>
        <div className='modalButtonsSection'>
        <button className='modalCloseButton' onClick={onClose}><i class='bx bx-x'></i></button>
        <button className='modalNextMovieButton' onClick={findRandomMovie}><i class='bx bx-repeat'></i></button>   
        </div>
    </div>

    <div className='MovieInfo'>
        {data?.data?.title && <h1 className='modalTitle'>Title: {data.data.title}</h1>}
        {data?.data?.release_date && <h2 className='modalReleaseDate'>Date of release: {data.data.release_date}</h2>}
        {data?.data?.overview && <h2 className='modalDescription'>Description: {data.data.overview}</h2>}
        
        
    </div>
    </div>
    </>
  )
}
