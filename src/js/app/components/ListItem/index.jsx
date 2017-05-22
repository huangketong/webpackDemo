/***
    ListItem

 * **/

import React, { PropTypes } from 'react';



const propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.object.isRequired
};

function ListItem({ item }){
    let formaTime = '未知时间';
    if(item.time){
        formaTime = new Date(item.time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[1];
    }
    return(
        <a
            href="#"
            ClassName="list-group-item item-component"
            onClick={onClick}>
            <span className="label label-default label-pill pull-xs-right">
                {formaTime}
            </span>
            <span className="item-title">{item.title}</span>
        </a>
    );
}

ListItem.propTypes = propTypes;

export default ListItem;
