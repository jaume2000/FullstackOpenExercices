
const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Part = ({part, exercises}) => {
  return(
  <p>
    {part} {exercises}
  </p>
  )
}

const Content = ({props}) => {
  return(
    <div>
      <Part part={props[0].part} exercises={props[0].exercises} />
      <Part part={props[1].part} exercises={props[1].exercises} />
      <Part part={props[2].part} exercises={props[2].exercises} />
    </div>
  )
}

const Total = ({exercises1,exercises2,exercises3}) => {
  return (
  <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content props={
        [
          {part : part1, exercises : exercises1},
          {part : part2, exercises : exercises2},
          {part : part3, exercises : exercises3}
          ]}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App