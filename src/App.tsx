import ListGroup from './components/ListGroup';
import {Fragment, useState} from 'react';

function App() {
    const items = ['New York', 'SF', 'Tokyo', 'Paris'];

    const [selectedIndex, setSelectedIndex] = useState(-1);
    //Hook

    return (
        //<></> makes this a fragment
        <>
            <h1>List</h1>
            {/* {items.length === 0 ? <p>No Item Found</p> : null} same as below */}
            {items.length === 0 && <p>No Item Found</p>}
            <ul className='list-group'>
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? 'list-group-item active'
                                : 'list-group-item'
                        }
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
