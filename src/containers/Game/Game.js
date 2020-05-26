import { connect } from 'react-redux'

import App from '../../App'
import { moveObjects, startGame } from '../../actions/index';

const mapStateToProps = state => ({
  angle: state.angle,
  gameState: state.gameState,
})

const mapDispatchToProps = dispatch => ({
  moveObjects: (mousePosition) => {
    dispatch(moveObjects(mousePosition));
  },
  startGame: () => {
  dispatch(startGame());
  },
});

const Game = connect(
  // defines de angle of the cannonPippe
  mapStateToProps,
  // gets the values of the current position of the mouse
  mapDispatchToProps,
)(App)

export default Game
