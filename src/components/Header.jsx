import Button from "./Button"
import Tasks from "./Tasks"

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log(e)
  }
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
      <Tasks />
    </header>
  )
}
Header.defaultProps = {
  title: "Task Tracker"
}


export default Header
