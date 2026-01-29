import ListGroup from './components/ListGroup';
import {Fragment} from 'react';

function App() {
    let items = ['New York', 'SF', 'Tokyo', 'Paris'];
    items = [];

    const getMessage = () => {
        return items.length === 0 ? <p>No Item Found</p> : null;
    };
    return (
        //<></> makes this a fragment
        <>
            <h1>List</h1>
            {getMessage()}
            <ul className='list-group'>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
