import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
import Dashboard from './components/dashboard/Dashboard'
import './App.css'


function App () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className='main-content'>
                <Header />
                <Dashboard />
            </div>
        </div>
    )
}

export default App;