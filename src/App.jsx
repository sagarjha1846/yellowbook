import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/header';
import Body from './components/main';
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex font-thin font-varela flex-col h-screen bg-slate-200'>
      <Header />
      <div className='flex-1 overflow-y-auto'>
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
