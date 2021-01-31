import './Square.styles.scss';

const Square = (props) => {
  const isWinnerSquare = props.winnerLine && props.winnerLine.includes(props.cellKey) ? 'is-winner-square' : '';
  const classes = `square ${isWinnerSquare}`;
  return (
    <button 
      className={classes} 
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default Square;