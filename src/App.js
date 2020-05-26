// import React from 'react';
//
// function App() {
//   return (
//     <div className="App">
//       <h1>We will create an awesome game with React, Redux, and SVG!</h1>
//     </div>
//   );
// }
//
// export default App;
import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import Canvas from './components/Canvas';

class App extends Component {
  render() {
    return (
      <Canvas />
      // <div className="App">
      //   <h1>{this.props.message}</h1>
      //
      // Testing SVG patterns
      //   <svg>
      //     <path d="M 20 20 V 80 H 50" stroke="black" stroke-width="2" fill="transparent" />
      //   </svg>
      //   <svg>
      //     <path d="M 20 20 C 20 110, 110 110, 110 20" stroke="black" fill="transparent"/>
      //   </svg>
      //
      // </div>
    );
  }
}

// App.propTypes = {
//   message: PropTypes.string.isRequired,
// };

export default App;
