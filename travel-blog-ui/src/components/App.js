import '../style/App.css';
import TopNavbar from './TopNavbar'
import Footer from "./Footer";
import {Container} from "react-bootstrap";

function App() {
  return (
    <div className="App" >
      <Container fluid>
        <TopNavbar />
        <div className={'travel-quote text-white'}>Jobs fill your pockets, <br/> adventures fill your soul</div>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
