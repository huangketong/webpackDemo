
import './style.scss';

import React, {PropTypes} from 'react';

const propType = {
    iten: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

class ItemEditor extends React.Component{
    render(){
        const{ onSave, onCancel } = this.prop;
        const item = this.prop.item || {
                title: '',
                content: ''
            }

        let saveText = item.id ? '����' : '����';
        let save = () => {
            onSave({
                ...item,
                title: this.refs.title.value,
                content: this.refs.content.value,
            });
        };

        return(
            <div className="col-md-8 item-editor-component">
                <div className="control-area">
                    <button onClick={save} className="btn btn-success">{saveText}</button>
                    <button onClick={onCancel} className="btn secondary">ȡ��</button>
                </div>
                <div className="edit-area">
                    <input ref="title" placeholder="����д����" defaultValue={item.title} />
                    <textarea ref="content" placeholder="����д����" defaultValue={item.content} />
                </div>
            </div>
        );

    }
}

ItemEditor.propTypes = propTypes;
export default ItemEditor;