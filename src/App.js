import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/Counter.js';

function App() {
  return (
    <Counter status='manual' />
  );
}

ReactDOM.render( <App />, document.getElementById("root") );

export default App;
