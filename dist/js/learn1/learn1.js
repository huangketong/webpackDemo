webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    ReactDOM = __webpack_require__(32);

	__webpack_require__(188);

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
	    displayName: 'ProductCategoryRow',

	    render: function render() {
	        return React.createElement(
	            'tr',
	            null,
	            React.createElement(
	                'th',
	                { colSpan: '2' },
	                this.props.category
	            )
	        );
	    }
	});

	//  ProductRow  ÿ�� ��Ʒ ��ʾһ��
	var ProductRow = React.createClass({
	    displayName: 'ProductRow',

	    render: function render() {
	        var name = this.props.product.stocked ? this.props.product.name : React.createElement(
	            'span',
	            { style: { color: 'red' } },
	            this.props.product.name
	        );
	        return React.createElement(
	            'tr',
	            null,
	            React.createElement(
	                'td',
	                null,
	                name
	            ),
	            React.createElement(
	                'td',
	                null,
	                this.props.product.price
	            )
	        );
	    }
	});

	//  ProductTable ���� �û����� ��ʾ�͹��� ���ݼ���(data collection)
	var ProductTable = React.createClass({
	    displayName: 'ProductTable',

	    render: function render() {
	        var rows = [];
	        var lastCategory = null;
	        this.props.products.forEach(function (product) {
	            if (product.category !== lastCategory) {
	                rows.push(React.createElement(ProductCategoryRow, { category: product.category, key: product.category }));
	            }
	            rows.push(React.createElement(ProductRow, { product: product, key: product.name }));
	            lastCategory = product.category;
	        });
	        return React.createElement(
	            'table',
	            null,
	            React.createElement(
	                'thead',
	                null,
	                React.createElement(
	                    'tr',
	                    null,
	                    React.createElement(
	                        'th',
	                        null,
	                        'Name'
	                    ),
	                    React.createElement(
	                        'th',
	                        null,
	                        'Price'
	                    )
	                )
	            ),
	            React.createElement(
	                'tbody',
	                null,
	                rows
	            )
	        );
	    }
	});

	// SearchBar  �������� �û�����
	var SearchBar = React.createClass({
	    displayName: 'SearchBar',

	    render: function render() {
	        return React.createElement(
	            'form',
	            null,
	            React.createElement('input', { type: 'text', placeholder: 'Search...' }),
	            React.createElement(
	                'p',
	                null,
	                React.createElement('input', { type: 'checkbox' }),
	                ' ',
	                'Only show products in stock'
	            )
	        );
	    }
	});

	//FilterableProductTable  ����ʾ��������
	var FilterableProductTable = React.createClass({
	    displayName: 'FilterableProductTable',

	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(SearchBar, null),
	            React.createElement(ProductTable, { products: this.props.products })
	        );
	    }
	});

	var PRODUCTS = [{ category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' }, { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' }, { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' }, { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' }, { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' }, { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }];

	ReactDOM.render(React.createElement(FilterableProductTable, { products: PRODUCTS }), document.getElementById('root1'));

/***/ },

/***/ 188:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});