import * as React from 'react';
import Chessboard from 'chessboardjsx' ;
import WithMoveValidation from  'chessboardjsx';
import PlayRandomMoveEngine from  'chessboardjsx' ;
import RandomVsRandomGame from  'chessboardjsx';
import CustomizedBoard from  'chessboardjsx';
import AllowDragFeature from   'chessboardjsx';
import PrestoChangoExample from  'chessboardjsx';
import UndoMove from   'chessboardjsx';
import SpareOnDrop from   'chessboardjsx';

interface ChessBoardState {
  showCustomizedBoard: boolean,
  showWithMoveValidation: boolean,
  showRandomVsRandomGame: boolean,
  showPlayRandomMoveEngine: boolean,
  showAllowDragFeature: boolean,
  showPrestoChango: boolean,
  showUndoMove: boolean,
  showSpareOnDrop: boolean
}

class ChessBoard extends React.Component<{}, ChessBoardState> {

  constructor ( props: any) {
    super( props );
    this.state = {
      showCustomizedBoard: false,
      showWithMoveValidation: true,
      showRandomVsRandomGame: false,
      showPlayRandomMoveEngine: false,
      showAllowDragFeature: false,
      showPrestoChango: false,
      showUndoMove: false,
      showSpareOnDrop: false
    }
  };

  public render() {
    return (
      <div>
        <Chessboard position="start">
          {this.state.showCustomizedBoard && <CustomizedBoard />}
          {this.state.showWithMoveValidation && <WithMoveValidation />}
          {this.state.showRandomVsRandomGame && <RandomVsRandomGame />}
          {this.state.showPlayRandomMoveEngine && <PlayRandomMoveEngine />}
          {this.state.showAllowDragFeature && <AllowDragFeature />}
          {this.state.showPrestoChango && <PrestoChangoExample />}
          {this.state.showUndoMove && <UndoMove />}
          {this.state.showSpareOnDrop && <SpareOnDrop />}
        </Chessboard>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      showCustomizedBoard: false,
      showWithMoveValidation: true,
      showRandomVsRandomGame: true,
      showPlayRandomMoveEngine: false,
      showAllowDragFeature: false,
      showPrestoChango: false,
      showUndoMove: false,
      showSpareOnDrop: false
    });
  }
}

export default ChessBoard;