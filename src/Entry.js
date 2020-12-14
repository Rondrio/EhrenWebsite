import React from 'react'

export default function Entry({ entry,setAdditionalStatisticsFlag }) {

    function showAdditionalInfo() {
        setAdditionalStatisticsFlag(entry.name)
    }

    return (
        <tr onClick={showAdditionalInfo} className="entry">
            <td className="name">{entry.name}</td>
            <td className="score">{entry.score}</td>
        </tr>
    )
}
