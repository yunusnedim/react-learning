import ListGroup from './components/ListGroup';
import {Fragment, useState} from 'react';

function App() {
    const items = ['New York', 'SF', 'Tokyo', 'Paris'];

    const handleSelectItem = (item: string) => {
      console.log(item);
    }

    return <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem} />;
}

export default App;
