import './assets/svg.scss';
import LnkButton from "./assets/links/LnkButton";
import MsgBlock from "./assets/blocks/MsgBlock";
import Loader from './components/Loader';

function App() {
  return (
    <div className="App"> 
      <LnkButton lnkAddr="#" lnkText="Link like a button" lnkType="success" />
      <MsgBlock type="danger"/> 
      <Loader /> 
    </div>
  );
}

export default App;
