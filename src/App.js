import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/Header'
import Characters from './components/Characters'


const App = () => {

    const [charactersItems, setCharacters]= useState([])
    const [isLoading, setIsLoading]= useState(true)
    
    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios (`https://www.breakingbadapi.com/api/characters`)
            console.log(result.data)
            setCharacters(result.data)
            setIsLoading(false)
        }
        fetchItems()

    }, [])

    return (
        <div className= "container">
            <Header />
            <Characters isLoading = {isLoading} charactersItems = {charactersItems}/>
        </div>
    )
    
}

export default App

