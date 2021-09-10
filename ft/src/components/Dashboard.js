import React from 'react'

function Dashboard(props) {
    const handleLogout = () =>{
        props.history.push('/login')
    }

    return (
        <div>
            Welcome User! <br /><br />
        </div>
    )
}

export default Dashboard
