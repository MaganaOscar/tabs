import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';

function App() {
  return (
    <div>
      <Tabs tabs = {[
        {item: "hello", content:"there mister"},
        {item:"goodbye", content:"mister"}
      ]}></Tabs>
    </div>
  );
}

export default App;
