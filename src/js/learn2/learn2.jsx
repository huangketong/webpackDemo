const React = require('react'),
    ReactDom = require('react-dom');

require('{css}/learn2/learn2.css');


//Nav 导航栏
class Nav extends React.Component{
    render(){
        return(
            <nav className="nav">
                <ul className="navlist">
                    <li><a className="active" href="">首页</a></li>
                    <li><a href="">告白气球</a></li>
                    <li><a href="">刚好遇见你</a></li>
                    <li><a href="">网易云音乐</a></li>
                    <li><a href="">王者荣耀</a></li>
                    <li><a href="">薛之谦</a></li>
                    <li><a href="">周杰伦</a></li>
                </ul>
            </nav>
        );
    }
}

class Banner extends React.Component{
    render(){
        return(
            <div className="banner">
                <img src="../dist/images/learn2/banner-1.jpg" alt=""/>
            </div>
        );
    }
}
//Header

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <Nav />
                <Banner />
            </div>
        );
    }
}
//Content

class Content extends React.Component{
    render() {
        return (
            <div className="content">
                hello react
            </div>
        );
    }
}
//Footer

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                footer12
            </div>
        );
    }
}
//Main 页面容器

class Main extends React.Component{
    render(){
        return(
            <section className="main">
                <Header />
                <Content />
                <Footer />
            </section>
        );
    }
}


ReactDom.render(
    <Main imgsrc={IMGSRC} />,
    document.getElementById('root')
);