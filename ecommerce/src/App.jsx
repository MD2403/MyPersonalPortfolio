import { Toaster } from 'react-hot-toast';
import './App.css';
import TopNavBar from './components/TopNavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      {/* Main navigation bar */}
      <TopNavBar />

      {/* Display toast notifications at the bottom center */}
      <Toaster position="bottom-center" />
    
      <Outlet />
    </>
  );
}

export default App;
