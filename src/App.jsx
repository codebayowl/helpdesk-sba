import './assets/svg.scss';
import LnkButton from "./assets/links/LnkButton";
import MsgBlock from "./assets/blocks/MsgBlock";

function App() {
  return (
    <div className="App">
      <LnkButton lnkAddr="#" lnkText="Link like a button" lnkType="success" />
      <MsgBlock type="danger"/>
    </div>
  );
}

export default App;
