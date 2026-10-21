
import './App.css';
import Header from './components/Header.js'
import Nav from './components/Nav.js'

function App(props) 
//props - так в react принято называть передаваемые параметры
{
  return (
    <div className="App">
      <Header />
      <Nav navigation = {props.navigation} />
    </div>
  );
}

export default App;
