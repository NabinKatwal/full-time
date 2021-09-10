import React from 'react'
import { useState } from 'react'

function Login(props) {
    const username = useFormInput('')
    const password = useFormInput('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleLogin = ()=>{
        props.history.push('/dashboard')
    }
    return (
        <div>
            Login<br/><br/>
            <div>
                username <br />
                <input type='text' {...username} autoComplete='new-password' />
            </div>
            <div style={{ marginTop:10 }}>
                Password <br />
                <input type='password' {...password} autoComplete = 'new-password' />
            </div>
            {error && <><small style={{color:'red'}}>{error}</small><br /></>}<br />
            <input type="button" value = {loading ? 'Loading...':'Login'} onClick = {handleLogin} disabled = {loading} /><br />
        </div>
    )
}

const useFormInput = initialValue =>{
    const [value, setValue] = useState(initialValue)

    const handleChange = e =>{
        setValue(e.target.value)
    }
    return{
        value, 
        onChange : handleChange
    }
}

export default Login
