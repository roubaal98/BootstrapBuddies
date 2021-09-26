import * as React from 'react';
import Chessboard from 'chessboardjsx' ;
import * as Chess from 'chess.js';

class ChessBoard extends React.Component {
  timer = () => window.setTimeout(this.makeRandomMove, 1000);

  constructor (props) {
    super( props );
    this.state = {
      chess: null,
      fen: ""
    }
  };

  render() {
    return(
      <div>
        <Chessboard position={this.state.fen}>
        </Chessboard>
    </div>
    )
  }

  componentDidMount() {
    this.setState({
      chess: new Chess(),
      fen: "start"
    });
    setTimeout(() => this.makeRandomMove(), 1000);
  }

  makeRandomMove = () => {
    let chess = this.state.chess;
    let possibleMoves = chess.moves();

    // exit if the game is over
    if (
      chess.game_over() === true ||
      chess.in_draw() === true ||
      possibleMoves.length === 0
    )
      return;

    let randomIndex = Math.floor(Math.random() * possibleMoves.length);
    chess.move(possibleMoves[randomIndex]);
    this.setState({ fen: chess.fen() });
    this.timer();
  }
}

export default ChessBoard;