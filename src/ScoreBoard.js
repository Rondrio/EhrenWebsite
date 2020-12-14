import React from 'react'
import Entry from './Entry'

export default function CrazyComponent({ ScoreBoard, sortingState, setAdditionalStatisticsFlag }) {

    switch (sortingState) {
        case 0:
            ScoreBoard = ScoreBoard.sort((a, b) => a.score < b.score ? 1 : -1)
            break
        case 1:
            ScoreBoard = ScoreBoard.sort((a, b) => a.score > b.score ? 1 : -1)
            break
        case 2:
            ScoreBoard = ScoreBoard.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
            break
        case 3:
            ScoreBoard = ScoreBoard.sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1)
            break
    }

    function showFurtherInformation() {

    }


    return (
        ScoreBoard.map(s => {
            return <>
                <Entry setAdditionalStatisticsFlag={setAdditionalStatisticsFlag} entry={s}></Entry>
            </>

        })
    )
}
