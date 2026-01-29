import ListGroup from './components/ListGroup';
import {Fragment} from 'react';
import {MouseEvent} from 'react';

function App() {
    const items = ['New York', 'SF', 'Tokyo', 'Paris'];

    // event handler
    const handleClick = (event: MouseEvent) => {
        console.log(event);
    };

    return (
        //<></> makes this a fragment
        <>
            <h1>List</h1>
            {/* {items.length === 0 ? <p>No Item Found</p> : null} same as below */}
            {items.length === 0 && <p>No Item Found</p>}
            <ul className='list-group'>
                {items.map((item, index) => (
                    <li
                        className='list-group-item'
                        key={item}
                        onClick={handleClick}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
