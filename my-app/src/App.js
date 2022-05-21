import React from "react";
import {Route,Link } from "react-router-dom";
import "./App.css";

class Title extends React.Component{
  render(props){
    return(<div className="site-title">{this.props.title}</div>);
  }
}

class Content extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inner:""
    };
  }

  render(props){
    return(<div className="text-content">
        {this.state.inner}
    </div>);
  }

  componentDidMount(){
    fetch("/Diana.txt")
      .then(response => response.text())
      .then(result => {
        this.setState({
          inner:result
        })
      });
  }
}

class Card extends React.Component{
  render(props){
    return(
      <div className="transparent-card">
        <Navbar items={[1,2,3]} />
        <Content />
      </div>
    );
  }
}

class Navbar extends React.Component{
  render(props){
    return(
      <div className="navbar">
        {
          this.props.items.map((item,index)=>(
            <li key={index}>{item}</li>
          ))
        }
      </div>
    )
  }
}

class LogoHref extends React.Component{
  render(props){
    let alt;
    if(!this.props.alt){
      let i = this.props.img.split("/");
      alt = i[i.length-1];
    }
    else alt = this.props.alt;
    return(
      <a className="logo-href" href={this.props.href} target="_blank" rel="noreferrer">
        <img src={this.props.img} alt={alt} style={{"margin":"20px 10px 20px 10px"}}/>
      </a>
    )
  }
}

let logo_hrefs = [
  {img:"/logos/React.png", href:"https://reactjs.org/"},
  {img:"/logos/VSCode.png", href:"https://code.visualstudio.com/"},
  {img:"/logos/Nodejs.jpeg", href:"https://nodejs.org/"},
  {img:"/logos/HTML.png", href:"https://www.w3.org/"},
  {img:"/logos/CSS.png", href:"https://www.w3.org/"},
  {img:"/logos/JavaScript.jpg", href:"https://www.javascript.com/"},
  {img:"/logos/Python.png", href:"https://www.python.org/"},
  {img:"/logos/Flask.png", href:"https://flask.palletsprojects.com"},
  {img:"/logos/Git.png", href:"https://git-scm.com/"},
  {img:"/logos/GitHub.jpg", href:"https://github.com"},
]

class Footer extends React.Component{
  render(props){
    return(<div>
      <div className="footer">
        <p>
          放一些logo让我看上去很<del>牛批</del>傻批
        </p>
      </div>

      <div className="footer">
        {logo_hrefs.map((item)=>{
          return <LogoHref img={item.img} href={item.href}/>
        })}
      </div>
    </div>
    );
  }
}

class App extends React.Component{
  render(props){
    return (<div>
      <div className="background" style={{"padding-bottom":"50px"}}>
        <Title title="AlphaHood" />
        <Card />        
      </div>
      <Footer />
    </div>);
  }
}

export default App;
