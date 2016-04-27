import makeStore from './store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './rebass/rebass.js';

// dnd
import { DragSource, DropTarget } from 'react-dnd';
var PropTypes = React.PropTypes;

export const store = makeStore();

console.log("initial store=" + store.getState());
store.subscribe( () => {
    render();
});
