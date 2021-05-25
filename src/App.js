import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Record from './Record';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            React Trade App
        </p>
      </header>
      <table>
        <Header onSearch={this.searchRecords} onSort={this.onSort} />
        <Record records={this.state.records} />
      </table>
    </div>
  );
}

export default App;
