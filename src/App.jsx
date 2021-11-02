import './App.scss';
import Home from './components/pages/home/home'
import Header from './components/pages/home/includes/Header'
function App() {
  return (
    <div className="app">
     <Header />
     <Home/>
    </div>
  );
}

export default App;
