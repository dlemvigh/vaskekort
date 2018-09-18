import * as React from 'react';
import './App.css';
import Kontanter from './Components/Kontanter';
import VaskekortContainer from './Components/VaskekortContainer';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div style={{float: "left"}}>
          <VaskekortContainer />
        </div>
        <div style={{float: "right"}}>
          <Kontanter />
        </div>
      </div>
    );
  }
}

export default App;
