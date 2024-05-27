import './App.css';
import './index.css';
import Card from './components/Card.jsx';

function App() {
  const status = false;

  return (
    <div className={status ? 'Card' : 'regular'}>
      <Card/>
    </div>
  );
}

export default App;