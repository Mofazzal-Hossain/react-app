
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
// import ListGroup from './components/ListGroup';

function App() {
  const buttonNames = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark"
  ];

  return (
    <>
      <ListGroup/>
      <Button buttonClassName={buttonNames} />
    </>
  );
}

export default App;
