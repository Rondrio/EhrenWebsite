import React from 'react'

export default function CrazyComponent({ ScoreBoard, sortingState }) {

    return (
        ScoreBoard.sort((a,b )=> a.score < b.score ? 1 : -1).map(Entry => {
            return <div>
                <label>{Entry.name}</label>
                <label> : </label>
                <label>{Entry.score}</label>
            </div>
        })
    )
}
