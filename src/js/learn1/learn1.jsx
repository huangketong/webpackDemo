const React = require('react'),
    ReactDOM =  require('react-dom');

require('{css}/learn1/learn1.css');

// ProductCategoryRow  ÿ�� ���� ��ʾһ���б�ͷ
//class ProductCategoryRow extends React.Component{
//    constructor(props){
//        super(props);
//    }
//    render(){
//        return (<tr><th colspan='2'>{this.props.category}</th></tr>);
//    }
//}
//
////  ProductRow  ÿ�� ��Ʒ ��ʾһ��
//class ProductRow extends React.Component{
//    constructor(props){
//        super(props);
//    }
//    render(){
//        var name = this.props.product.stocked ?
//            this.props.product.name :
//            <span style={{color:'red'}}>
//                {this.props.product.name}
//            </span>;
//        var price = this.props.product.price;
//        return(
//            <tr>
//                <td>{name}</td>
//                <td>{price1}</td>
//            </tr>
//        );
//    }
//}
//
//
////  ProductTable ���� �û����� ��ʾ�͹��� ���ݼ���(data collection)
//class ProductTable extends React.Component{
//    constructor(props){
//        super(props);
//    }
//    render(){
//        var rows = [];
//        var lastCategory = null;
//        this.props.products.forEach(function(product){
//            if(product.category !== lastCategory){
//                rows.push(<ProductCategoryRow category={[product.category]} key={product.category} />);
//            }
//            rows.push(<ProductRow product={product} key={product.name} />);
//            lastCategory = product.category;
//        });
//        return(
//            <table>
//                <thead>
//                    <tr>
//                        <th>Name</th>
//                        <th>Price</th>
//                    </tr>
//                </thead>
//                <tbody>{rows}</tbody>
//            </table>
//        );
//    }
//}
//
//// SearchBar  �������� �û�����
//class SearchBar extends React.Component{
//    constructor(props){
//        super(props);
//    }
//    render(){
//        return(
//            <form>
//                <input type="text" placeholder="Search..."/>
//                <p>
//                    <input type="checkbox"/>
//                    {' '}
//                    Only show products in stock
//                </p>
//            </form>
//        );
//    }
//}
//
////FilterableProductTable  ����ʾ��������
//class FilterableProductTable extends React.Component{
//    constructor(props){
//        super(props);
//    }
//    render(){
//        <div>
//            <SearchBar />
//            <ProductTable products={this.props.products} />
//        </div>
//    }
//}
//var PRODUCTS = [
//    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
//];
//
//ReactDOM.render(
//    <FilterableProductTable products={PRODUCTS} />,
//    document.getElementById('root1')
//);


//ProductCategoryRow  ÿ�� ���� ��ʾһ���б�ͷ
var ProductCategoryRow = React.createClass({
    render: function() {
        return (<tr><th colSpan="2">{this.props.category}</th></tr>);
    }
});

//  ProductRow  ÿ�� ��Ʒ ��ʾһ��
var ProductRow = React.createClass({
    render: function() {
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
});

//  ProductTable ���� �û����� ��ʾ�͹��� ���ݼ���(data collection)
var ProductTable = React.createClass({
    render: function() {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function(product) {
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

// SearchBar  �������� �û�����
var SearchBar = React.createClass({
    render: function() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
});

//FilterableProductTable  ����ʾ��������
var FilterableProductTable = React.createClass({
    render: function() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
});


var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('root1')
);