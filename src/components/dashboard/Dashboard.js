import React from 'react'
import AlertsChart from '../alertschart/AlertsChart';
import TrafficChart from '../trafficchart/TrafficChart'

function Dashboard () {
    return (
        <div className='dashboard'>
            <AlertsChart />
            <TrafficChart />

        </div>
    )
}

export default Dashboard;