
import React from 'react';
import uuid from 'uuid';

import CreateBar from '../CreateBar';
import List from '../List';
import ItemEditor from '../ItemEditor';
import ItemShowLayer from '../ItemShowLayer';

import './style.scss';


class App extends React.Component{
    constructor(props){
        super(props);

        this.states={
            item: [],
            selectedId: null,
            editing: false
        };

        this.selectItem = this.selectItem.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.deleteitem = this.deleteitem.bind(this);
        this.createItem = this.createItem.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    selectItem(id) {
        if(id === this.states.selectedId){
            return;
        }

        this.setState({
            selectedId: id,
            editing: false
        });
    }

    saveItem(item){
        let items =this.state.items;

        /*新建item*/
        if(!item.id){
            items = [...items,{
                ...items,
                id: uuid.v4(),
                time: new Date().getTime(),
            }];

        /*已经存在的item*/
        }else{
            items = items.map(
                exist => (
                    exist.id === item.id ?
                    {
                        ...exist,
                        ...item,
                    } : exist
                )
            );
        }

        this.setStates({
            items,
            selectedId: item.id,
            editing: false
        });
    }

    deleteitem(id){
        if(id){
            return;
        }

        this.setState({
            items: this.states.items.filter(
              result => result.id !== id
            )
        });
    }

    createItem(){
        this.setState({
            selectedId: null,
            editing: true
        });
    }

    editItem(){
        this.setState({
            selectedId: id,
            editing: true
        });
    }

    cancelEdit(){
       this.setState({
           editing: false
       });
    }

    render(){
        const { items, selectedId, editing } = this.state;
        const selected = selectedId && items.find(item => item.id === selectedId);
        const mainPart = editing
            ? (
            <ItemEditor
                item={selected}
                onSave={this.saveItem}
                onCancel={this.cancelEdit}
                />
        )
            : (
            <ItemShowLayer
                item={selected}
                onEdit={this.editItem}
                onDelete={this.deleteItem}
                />
        );

        return (
            <section className="deskmark-component">
                <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
                    <a className="navbar-brand" href="#">Deskmark App</a>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 list-group">
                            <CreateBar onClick={this.createItem} />
                            <List
                                items={this.state.items}
                                onSelect={this.selectItem}
                                />
                        </div>
                        {mainPart}
                    </div>
                </div>
            </section>
        );
    }
}

export default App;