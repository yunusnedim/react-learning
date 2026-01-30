import {useState} from 'react';

// {items: [], heading: string}
// You can use Props to be shorter
interface ListGroupProps {
    items: string[];
    heading: string;
    // action: () =>;
    onSelectItem: (item:string) => void;
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1); //hook


    return (
        //<></> makes this a fragment
        <>
            <h1>{heading}</h1>
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
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
