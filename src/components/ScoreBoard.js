import React, { useEffect, useState } from 'react'
import Entry from './Entry'
import styled from 'styled-components'

// export default function CrazyComponent({ ScoreBoard, sortingState, setAdditionalStatisticsFlag }) {

//     switch (sortingState) {
//         case 0:
//             ScoreBoard = ScoreBoard.sort((a, b) => a.score < b.score ? 1 : -1)
//             break
//         case 1:
//             ScoreBoard = ScoreBoard.sort((a, b) => a.score > b.score ? 1 : -1)
//             break
//         case 2:
//             ScoreBoard = ScoreBoard.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
//             break
//         case 3:
//             ScoreBoard = ScoreBoard.sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1)
//             break
//     }

//     function showFurtherInformation() {

//     }

const ScoreBoard = ({ scoreboard }) => {
    const [sorted, setSorted] = useState([])
    useEffect(() => {
        const sortedList = scoreboard.sort((a, b) => a.score < b.score ? 1 : -1)
        setSorted(sortedList)
    }, [scoreboard])

    return (
        <List>
            {sorted.map((item, index) => {
                return (
                    <Entry
                        key={index}
                        name={item.name}
                        score={item.score}
                    // setAdditionalStatisticsFlag={setAdditionalStatisticsFlag} 
                    />
                )
            })}
        </List>
    )
}
export default ScoreBoard

const List = styled.div`
z-index: 1;
`