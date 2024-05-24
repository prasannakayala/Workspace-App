import React from 'react';
import './App.css';
import Header from './components/Navbar/Header';
import TopContainer from './components/TopContainer/TopContainer';
import ChooseContainer from './components/ChooseContainer/ChooseContainer';
import SpaceContainer from './components/SpaceContainer/SpaceContainer';
import DownloadContainer from './components/DownloadContainer/DownloadContainer';
import Footer from './components/Footer/Footer';

const App: React.FC=()=>{

  return (
    <div className='app'>
   <Header/>
 <div className='app-container'>
 <TopContainer/>
   <ChooseContainer/>
   <SpaceContainer/>
   <DownloadContainer/>
 </div>
   <Footer/>
    </div>
  )
}

export default App;