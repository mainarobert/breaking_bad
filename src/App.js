import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/Header'

const App = () => {

    const [characters, setCharacters]= useState([])
    const [isLoading, setIsLoading]= useState(true)
    
    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios (`https://www.breakingbadapi.com/api/characters`)
            console.log(result.data)
        }
        fetchItems()

    }, [])

    return (
        <div className= "container">
            <Header />
        </div>
    )
    
}

export default App

