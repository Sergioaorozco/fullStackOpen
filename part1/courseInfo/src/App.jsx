const Total = ({exercises1,exercises2,exercises3}) => {
  return (<p>Number of exercises: {exercises1 + exercises2 + exercises3}</p>)
}

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({Arr}) => (
  <div>
    {Arr.map(({part, exercises}) => (
      <p key={part}>{part} - {exercises}</p>
    ))}
  </div>
)


const App = () => {

  const Arrparts = [
    {part:'Fundamentals of React', exercises: 10},
    {part:'Using props to pass data',exercises: 7},
    {part:'State of a component',exercises: 14}
  ]

  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content Arr={Arrparts} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App