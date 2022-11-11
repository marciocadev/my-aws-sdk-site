import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ContentContainer } from './components/ContentContainer/ContentContainer';
import { SideBar } from './components/SideBar/SideBar';

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <SideBar />
        <ContentContainer />
      </BrowserRouter>      
    </div>
  );
}

export default App;
