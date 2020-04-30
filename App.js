import React from 'react';
import { investigate } from 'react-native-bundle-splitter/dist/utils';
import Router from './src/router';

const investigateInfo = investigate();

console.log(`\nBundle Info:\n-----------\nloaded: ${investigateInfo.loaded.length}\nwaiting: ${investigateInfo.waiting.length}\n-----------`);

const App = () => <Router />;

export default App;
