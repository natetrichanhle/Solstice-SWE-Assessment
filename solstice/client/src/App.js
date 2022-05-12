import logo from './logo.svg';
import './App.css';
// importing component file so that I can render it 
import ListenHistoryDisplay from './components/ListenHistoryDisplay';

function App() {
  return (
    <div className="App">
      {/* calling onto component file to render */}
      <ListenHistoryDisplay />
    </div>
  );
}

export default App;
