import React from 'react';
import './App.css';

const Microfrontend1 = React.lazy(() => import("microfrontend1/App"));
const Microfrontend2 = React.lazy(() => import("microfrontend2/App"));


function App() {

    return (
      <div className="App">
        <header className="App-header">
          Host Application: React
        </header>
          <div className="micro-frontends-container">
              {Microfrontend1 && <Microfrontend1 />}
              {Microfrontend2 && <Microfrontend2 />}
          </div>
      </div>
    );
}

export default App;
