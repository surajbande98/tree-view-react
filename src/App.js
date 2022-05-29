import logo from './logo.svg';
import './App.css';
import { SampleData } from './sample';
import React from 'react';
import TreeView from './components/tree-view';

function App() {

  const sampleData = new SampleData().data; 

  return (
    <React.Fragment>
      <TreeView items={sampleData}></TreeView>
    </React.Fragment>
  );
}

export default App;
