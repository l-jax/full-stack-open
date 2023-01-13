import { useState } from 'react'

const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = ({statistics}) => {
  return (
    <div>
      <h1>statistics</h1>
      <Statistic name='good' value={statistics.good} />
      <Statistic name='neutral' value={statistics.neutral} />
      <Statistic name='bad' value={statistics.bad} />
      <Statistic name='all' value={statistics.all} />
      <Statistic name='average' value={statistics.average} />
      <Statistic name='positive' value={statistics.positive} />
    </div>
  )
}


const Statistic = ({name, value}) => {
  return (
    <div>
      <p>{name} {value}</p>
    </div>
  )
}

const App = () => {
  const [statistics, setStatistics] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
    all: 0, 
    average: 0, 
    positive: 0
  })

  const handleGoodClick = () => {
    const newStatistics = {
      ...statistics,
      good: statistics.good + 1,
      all: statistics.all + 1,
      average: (statistics.good + 1 - statistics.bad) / (statistics.all + 1),
      positive: ((statistics.good + 1) / (statistics.all + 1)) * 100
    }
    setStatistics(newStatistics)
  }

  const handleNeutralClick = () => {
    const newStatistics = {
      ...statistics,
      neutral: statistics.neutral + 1,
      all: statistics.all + 1,
      average: (statistics.good - statistics.bad) / (statistics.all + 1),
      positive: (statistics.good / (statistics.all + 1)) * 100
    }
    setStatistics(newStatistics)
  }

  const handleBadClick = () => {
    const newStatistics = {
      ...statistics,
      bad: statistics.bad + 1,
      all: statistics.all + 1,
      average: (statistics.good - (statistics.bad + 1)) / (statistics.all + 1),
      positive: (statistics.good / (statistics.all + 1)) * 100
    }
    setStatistics(newStatistics)
  }

  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics statistics={statistics} />
    </div>
  )
}

export default App;
