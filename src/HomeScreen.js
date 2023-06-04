import React, { useEffect, useState } from 'react';
import "./HomeScreen.css"
import Nav from "./Nav"
import Banner from "./Banner"
import Row from "./Row"
import requests from './Requests';
import Modal from './Modal'
import axios from "./axios";


function HomeScreen() {
    const [isOpen, setIsOpen] = useState (false);
    const [randomMovie,setRandomMovie] = useState ([]);
    const [latestId,setLatestId] =useState();

    const baseUrl="https://api.themoviedb.org/3"

    async function findLatestsMovie() {
        const request = await axios.get(baseUrl+requests.latestMovie);
        // console.log(request.data.id)
        setLatestId(request.data.id)   
    }

    async function findRandomMovie () {
        let randomId =  Math.floor(Math.random() * latestId -1)
        const request = await axios.get(`${baseUrl}/movie/${randomId}${requests.randomMovie}`).catch(console.error);
        if(request?.status===200){
            setRandomMovie(request)
        }
    }

    useEffect (() => {
        findLatestsMovie()
    },[])


    return <div className='homeScreen'>
        <Nav onOpen={()=>setIsOpen(true)} findRandomMovie={findRandomMovie} />

        <Banner />

        <Row title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow/>
        <Row title="Trending Now"
        fetchURL={requests.fetchTrending}
        isLargeRow/>
        <Row title="Top Rated"
        fetchURL={requests.fetchTopRated}
        isLargeRow/>
        <Row title="Action Movies"
        fetchURL={requests.fetchActionMovies}
        isLargeRow/>
        <Row title="Comedy Movies"
        fetchURL={requests.fetchComedyMovies}
        isLargeRow/>
        <Row title="Horror Movies"
        fetchURL={requests.fetchHorrorMovies}
        isLargeRow/>
        <Row title="Romance Movies"
        fetchURL={requests.fetchRomanceMovies}
        isLargeRow/>
        <Row title="Documentaries"
        fetchURL={requests.fetchDocumentaries}
        isLargeRow/>

        <Modal open={isOpen} onClose={()=>setIsOpen(false)} data={randomMovie} findRandomMovie={findRandomMovie}/>
        
    </div>
    ;
}

export default HomeScreen;