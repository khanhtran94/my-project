import logo from './logo.svg';
import './App.css';
import StarRating from './componets/StarRating';

function App() {
  return (
    <StarRating
      style={{ backgroundColor: "lightblue" }}
      onDoubleClick={e => alert("double click")}
    />
  );
}

export default App;
