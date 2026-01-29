import ListGroup from './components/ListGroup';
import {Fragment} from 'react';

function App() {
    const items = ['New York', 'SF', 'Tokyo', 'Paris'];

    return (
        //<></> makes this a fragment
        <>
            <h1>List</h1>
            {/* {items.length === 0 ? <p>No Item Found</p> : null} same as below */}
            {items.length === 0 && <p>No Item Found</p>}
            <ul className='list-group'>
                {items.map((item) => (
                    <li
                        className='list-group-item'
                        key={item}
                        onClick={() => console.log('clicked ' + item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
