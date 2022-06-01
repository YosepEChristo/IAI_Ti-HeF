// import logo from './logo.svg';
import NavigationBar from './component/NavigationBar';
import SignUp from './page/SignUp';
import './App.css';

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
      </div>
      <div className="signUp">
        <SignUp />
      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
