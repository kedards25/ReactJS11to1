import logo from './logo.svg';
import './App.css';
import Catalog from './Catalog';
import Posts from './Posts';
import ApiCall from './ApiCall'

function App() {
  return (
    // <div className="App">
    //   <header>
    //     <h1>Welcome to MY-SHOP</h1>
    //   </header> 
    //   <Catalog/>
    //   <Welcome name="Kedar"/>
    // </div>
    <div className="App">
      <header className="App-header">

        <h1 className="App-title">The Catalog App</h1>
        {/* this is a comment */}
      </header>
      {/* <Catalog/> */}
      <Posts/>
      <ApiCall/>
      </div>

  );
}

export default App;
