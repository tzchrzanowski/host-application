import React from 'react';
import './App.css';

const Microfrontend1 = React.lazy(() => import("microfrontend1/App"));

function App() {

    return (
      <div className="App">
        <header className="App-header">
          Host Application
        </header>
          <div className="microfrontends-container">
              {Microfrontend1 && <Microfrontend1 />}
          </div>
      </div>
    );
}

export default App;
