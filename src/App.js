import logo from './logo.svg';
// import './App.css';
import GitHubReposearch from './GitHubRepoSearch';
import GitHubRepoDataGrid from './GitHubRepoDataGrid';

function App() {
  return (
    <div className="App">
      <GitHubReposearch />

      <br/><br/>
      <GitHubRepoDataGrid />

    </div>
  );
}

export default App;