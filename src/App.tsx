import ListGroup from './components/ListGroup';
import {Fragment} from 'react';

function App() {
    const items = ['New York', 'SF', 'Tokyo', 'Paris'];
    items.map((item) => <li>{item}</li>);

    return (
        //<></> makes this a fragment
        <>
            <h1>List</h1>
            <ul className='list-group'>
                {items.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
