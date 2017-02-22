/****
    ItemShowLayer
    ��Markdown��ʽת��ΪHTML�ĵ���ʽ
 *****/
import './style.scss';
import marked from 'marked';

import React, { PropTypes } from 'react';


const propTypes = {
    item: PropTypes.object,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

function ItemShowLayer({ item, onEdit, onDelete }){
    if(!item || !item.id){
        return(
            <div className="col-md-8 item-show-layer-component">
                <div className="no-select">��ѡ������б����������</div>
            </div>
        );
    }

    const content = marked(item.content);

    return(
        <div className="col-md-8 item-show-layer-component">
            <div className="control-area">
                <button onClick={() => onEdit(item.id)} className="btn btn-primary">�༭</button>
                <button onClick={() => onDelete(item.id)} className="btn btn-danger">ɾ��</button>
            </div>
            <h2>{item.title}</h2>
            <div className="item-text">
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
}


ItemShowLayer.propTypes = propTypes;

export default ItemShowLayer;

