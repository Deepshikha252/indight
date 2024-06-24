import React from 'react'

const InsightsCard = ({ label, insightNumber, tag = "Insights" }) => {
    return (
        <div className="card">
            <h1>{insightNumber}</h1>
            <h3>{label}</h3>
            <p>{tag}</p>
        </div>
    )
}

export default InsightsCard