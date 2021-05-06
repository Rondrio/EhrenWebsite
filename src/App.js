import ScoreBoard from './components/ScoreBoard'
import AdditionalStatistics from './components/AdditonalStatistics'
import { useState, useEffect } from 'react'
import Spinner from './components/Spinner'
import './App.css'
import styled from 'styled-components/macro'
import Background from './components/Background'
// import { switchSortingStateAlphabetical, switchSortingStateHighToLow } from './utils/Sorting'

function App() {

  const [scoreBoard, setScoreBoard] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [additonalStatisticsFlag, setAdditionalStatisticsFlag] = useState("")


  useEffect(() => {
    fetch('http://alexgz.de:8080/scoreboard').then(response => { return response.text() }).then((json) => {

      console.log(json)
      const data = JSON.parse(json)
      if (data) {
        setScoreBoard(data)
        setisLoading(false)
      }
    })
  }, [])

  return (
    <>
      {/* <Background /> */}
      <Header>
        <HeaderWrapper>
          Ehrenboard
        </HeaderWrapper>
      </Header>

      <div className="addInfoContainer">
        <AdditionalStatistics additionalStatisticsFlag={additonalStatisticsFlag}></AdditionalStatistics>
      </div>

      <Container>
        {/* <TopList></TopList> */}
        <Wrapper>
          <ScoreBoard scoreboard={scoreBoard}
          //  sortingState={sortingState} 
          // setAdditionalStatisticsFlag={setAdditionalStatisticsFlag} 
          />

        </Wrapper>
      </Container>
    </>
  )
}

export default App;

const TopList = styled.div`
  height: 400px;
  width: 400px;
  background-color: #f2f2f2;
`

const Container = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  z-index: 6;
    overflow-y: scroll;
`

const Wrapper = styled.div`
  overflow-y: scroll;
  z-index: 6;
`

const Header = styled.header`
    /* box-shadow: 0 2px 4px 0 hsl(198deg 45% 10% / 12%); */
`
const HeaderWrapper = styled.div`
  padding: 16px 32px;
    display: flex;
    /* align-items: center;
    justify-content: center; */
    font-weight: bold;
    font-size: 2rem;
    color: #f1f1f1;
`