import ListGroup from './components/ListGroup';
import {Fragment, useState} from 'react';

function App() {
    const items = ['New York', 'SF', 'Tokyo', 'Paris'];
    return <ListGroup items={items} heading='Cities' />;
}

export default App;
