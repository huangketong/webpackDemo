var login = require('./login.js');
// 使用webpack.ProvidePlugin插件后，每个js 文件中就不用引用jQuery了
var $ = require('jquery');

require('./index.css');

$('.userName').html(login.sayName());

$('.div').html('hello joyowo.com!');


console.log(login.sayName());
console.log('imports userName is ' + login.userName);


console.log('this is my webpack!');