import './spinner.css';

function Spinner(): JSX.Element {
  return (
    <div className="loading-data">
      <img src="./loading.gif"/>
    </div>
  );
}

export default Spinner;
