import '../style/App.css';
import TopNavbar from './TopNavbar'
import {Container} from "react-bootstrap";

function App() {
  return (
    <div className="App" >
      <Container fluid>
        <TopNavbar />
        <h1>Jobs fill your pockets, adventures fill your soul</h1>
      </Container>
    </div>
  );
}

export default App;
