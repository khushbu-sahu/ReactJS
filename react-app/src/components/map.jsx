import React from 'react'

function Map() {
    let Items = [];
    // let Items =["Shirt", "Pants", "Shoes", "Hat", "Socks", "Belt", "Jacket", "Scarf", "Gloves", "Sweater","Dress"];

    let Empty = Items.length === 0 ? <h4>Shop is Empty</h4> : null;
    return (
        <div>
            <center>
                <h1>Shop Status</h1>
                {Empty}
                <ul className='list-group list-group-flush'>
                    {Items.map(item => <li key={item} class="list-group-item">{item}</li>)}
                </ul>
            </center>

        </div>
    )
}

export default Map;
