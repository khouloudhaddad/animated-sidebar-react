import Sidebar from './components/Sidebar';
import { useState } from 'react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="App">
      <button onClick={openSidebar} className="open_sidebar">
        <span className="hidden">Open sidebar</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          ></path>
        </svg>
      </button>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}

export default App;
