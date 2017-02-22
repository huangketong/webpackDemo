
import React, { PropTypes } from 'react';


import ListItem from './ListItem';


const propTypes = {
    items: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
}

function List({ item, onSelect }){

    /*循环插入子组件*/
    const itemContent = items.map(
        item => (
            <ListItem item={item}
                key={item.id}
                onClick={() => onSelect(item.id)}
                />
        )
    );
    return(
        <div className="list-component">
            {itemContent}
        </div>
    );
}

List.propTypes = propTypes;

export default List;


