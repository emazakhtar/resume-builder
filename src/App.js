import "./App.css";
import {
  resume,
  resume1,
  resume2,
  resume3,
  resume4,
  resume5,
  resume6,
  resume7,
} from "./data/data";

import Resume from "./components/Resume";
function App() {
  return (
    <div className="App">
      <Resume {...resume} />
      <Resume {...resume1} />
      <Resume {...resume2} />
      <Resume {...resume3} />
      <Resume {...resume4} />
      <Resume {...resume5} />
      <Resume {...resume6} />
      <Resume {...resume7} />
    </div>
  );
}

export default App;
