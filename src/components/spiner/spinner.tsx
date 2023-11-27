import './spinner.css';

function Spinner(): JSX.Element {
  return (
    <div className="loading-data">
      <img src="img/loading-waiting.gif"/>
      <h1>WE ARE LOADING OFFERS...</h1>
    </div>
  );
}

export default Spinner;
