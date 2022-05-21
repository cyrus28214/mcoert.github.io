import React from "react";
import style from "./TestPage.module.css";

class Title extends React.Component{
  render(props){
    return(<div className={style["site-title"]}>{this.props.title}</div>);
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
    return(<div className={style["text-content"]}>
        {this.state.inner}
    </div>);
  }

  componentDidMount(){
    fetch("/text/Diana.txt")
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
      <div className={style["transparent-card"]}>
        <Navbar items={[1,2,3]} />
        <Content />
      </div>
    );
  }
}

class Navbar extends React.Component{
  render(props){
    return(
      <div className={style["navbar"]}>
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
      <a className={style["logo-href"]} href={this.props.href} target="_blank" rel="noreferrer">
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
      <div className={style["footer"]}>
        <p>
          放一些logo让我看上去很<del>牛批</del>傻批
        </p>
      </div>

      <div className={style["footer"]}>
        {logo_hrefs.map((item, index)=>{
          return <LogoHref img={item.img} href={item.href} key={index}/>
        })}
      </div>
    </div>
    );
  }
}

class TestPage extends React.Component{
  render(props){
    return (<div>
      <div className={style["background"]}>
        <Title title="AlphaHood" />
        <Card />        
      </div>
      <Footer />
    </div>);
  }
}

export default TestPage;
