function Navbar(props) {
  return (
    <h1 className="text-3xl font-bold underline">Hey, {props.name}.</h1>
  );
}

function App() {
  return (
    <Navbar name="Shahzain"/>
  );
}

export default App;
