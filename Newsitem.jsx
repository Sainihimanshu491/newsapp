import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {tittle,descrip,imageUrl,idUrl} = this.props;
    return (
      <div className="card" >
  <img src={!imageUrl?"https://cdn.abcotvs.com/dip/images/15300346_tesla-fire.png?w=1600":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{tittle}</h5>
    <p className="card-text">{descrip}</p>
    <a href={idUrl} rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>
  </div>
</div>
    )
  }
}

export default Newsitem;