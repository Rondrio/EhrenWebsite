import ScoreBoard from './ScoreBoard'
import { useState, useEffect } from 'react'

function App() {

  const [scoreBoard, setScoreBoard] = useState([])

  useEffect(() => {
    fetch('http://alexgz.de:8080/scoreboard').then(response => { return response.text() }).then((json) => {

      console.log(json)
      const data = JSON.parse(json)
      if (data) {
        setScoreBoard(data)
      }
    })
  }, [])


  return (
    <>
      <ScoreBoard ScoreBoard={scoreBoard}></ScoreBoard>
    </>
  );
}

export default App;
