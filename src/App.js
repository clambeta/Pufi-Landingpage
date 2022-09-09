import React from 'react';
import './App.scss';
import Header from './components/Header';
import Section from './components/Section';
import SecondarySection from './components/SecondarySection';
import Hashtag from './components/Hashtag';
import PanelPhotos from './components/PanelPhotos';
import Subscription from './components/Subscription'
import FormEmail from './components/FormEmail';
import Footer from './components/Footer';
import {Data} from './components/Data';

function App() {
  return (
    <div className="App">      
        <Header />
        <Section slides={Data}/> 
        <SecondarySection />   
        <Hashtag />
        <PanelPhotos />    
        <Subscription />
        <Footer />

    </div>
  );
}

export default App;
