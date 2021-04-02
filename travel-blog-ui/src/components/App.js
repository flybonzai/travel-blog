import '../style/App.css';
import TopNavbar from './TopNavbar'
import {Container} from "react-bootstrap";

function App() {
  return (
    <div className="App" >
      <Container>
        <TopNavbar />
      </Container>
    </div>
  );
}

export default App;
