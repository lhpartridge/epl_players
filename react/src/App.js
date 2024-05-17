import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from './components/Header'
import Form from './components/Form'

const App =()=> {

    const [ formData, setFormData ] = useState({
        fName: '',
        lName: '', 
        alias: '',
        dob: '',
        age: '',
        birth_city: '',
        birth_country: '',
        positions: '',
        status: '',
        current_team: '',
        team_history: '',
        fun_fact: ''
    })

    const [ players, setPlayers ] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/player')
            .then(res => setPlayers(res.data))
    }, [])

    const handleChange =(event)=> {
        const { name, value } = event.target 
        setFormData(prevState => {
            return {
                ...prevState, 
                [name]: value
            }
        })
    }

    const handleSubmit =(event)=> {
        event.preventDefault()
        // figure out what to do here from other forms
    }

    return(
        <>
            <Header />
            <Form />
        </>
    )
}

export default App