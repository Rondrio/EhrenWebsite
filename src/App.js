import ScoreBoard from './ScoreBoard'
import AdditionalStatistics from './AdditonalStatistics'
import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [scoreBoard, setScoreBoard] = useState([])
  const [sortingState, setSortingState] = useState(0)
  const [additonalStatisticsFlag, setAdditionalStatisticsFlag] = useState("")


  useEffect(() => {
    fetch('http://alexgz.de:8080/scoreboard').then(response => { return response.text() }).then((json) => {

      console.log(json)
      const data = JSON.parse(json)
      if (data) {
        setScoreBoard(data)
      }
    })
  }, [])

  function switchSortingStateHighToLow() {
    switch (sortingState) {
      case 0:
        // switch to high to low
        setSortingState(1)
        break
      default:
        // switch to low to high
        setSortingState(0)
    }
  }

  function switchSortingStateAlphabetical() {
    switch (sortingState) {
      case 2:
        // switch to A-Z
        setSortingState(3)
        break
      default:
        // switch to Z-A
        setSortingState(2)
        break
    }
  }


  return (
    <>
      <header className="header">EHRENSCOREBOARD</header>

      <div className="addInfoContainer">
        <AdditionalStatistics additionalStatisticsFlag={additonalStatisticsFlag}></AdditionalStatistics>
      </div>

      <table>
        <tr>
          <th onClick={switchSortingStateAlphabetical} className="nameHeader">Name</th>
          <th onClick={switchSortingStateHighToLow} className="scoreHeader">Score</th>
        </tr>
        <>
          <ScoreBoard ScoreBoard={scoreBoard} sortingState={sortingState} setAdditionalStatisticsFlag={setAdditionalStatisticsFlag} ></ScoreBoard>
        </>
      </table>


    </>
  );
}

export default App;
