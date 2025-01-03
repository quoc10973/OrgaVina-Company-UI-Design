import React from 'react'
import stats from '../assets/stats.png'

const Stats = () => {
    return (
        <div className="w-150% h-280  overflow-hidden">
            <img src={stats} alt="Banner" className="w-full h-full object-cover" />
        </div>
    )
}

export default Stats