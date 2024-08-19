import React from 'react'
import './sidebar.css';

function Sidebar() {
    return(
        <div className='sidebar'>
            <h2> Cybersecurity Dashboard</h2>
            <ul>
                <li>Overview</li>
                <li>Alerts</li>
                <li>Traffic</li>
                <li>Vulnerabilities</li>
                <li>Firewall Status</li>
            </ul>
        </div>    
    );
}
export default Sidebar