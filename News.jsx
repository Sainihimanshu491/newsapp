import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
//import PropTypes  from 'prop-types';

export class News extends Component {
 
   constructor(){
    super();
    this.state = {
      articles:[],
      loading:false
    }
  }
  //  static defaultProps = {
  //   country:"us",
  //   pageSize: 12,
  //  }
  //  static PropTypes = {
  //   country: PropTypes.string,
  //   pageSize:PropTypes.number,
  //  }
   async componentDidMount(){ 
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5550834613184c118983e1eaff3bca87&page=1&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true,
    })
    fetch(url).then((res)=>res.json()).then((data)=>{
      this.setState({articles:data.articles,
       loading:false,
       totalResults:data.totalResults,
        page:1
      })
    })
    // let res = await fetch(url);
    // let data = await res.json();
    // //console.log(parsedData);
    // this.state({articles: data.articles,
    //   loading:false,
    //    totalResults:data.totalResults,
    //    page:1
    // })
  }
  handleNext = async()=>{
    console.log("Next")
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5550834613184c118983e1eaff3bca87&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true,
    })
    fetch(url).then((res)=>res.json()).then((data)=>{
      this.setState({
        page:this.state.page + 1,
        articles:data.articles,
       loading:false,
      })
    })
  }
  }
  handlePrev = ()=>{
     console.log(" Previous")
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5550834613184c118983e1eaff3bca87&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({
      loading:true,
    })
    fetch(url).then((res)=>res.json()).then((data)=>{
      this.setState({
        page:this.state.page - 1,
        articles:data.articles,
       loading:false,
      })
    })
  }
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Newsapp - By Using React JS</h1>
       {this.state.loading && <Spinner/>} 
        <div className='row my-4'> 
        {!this.state.loading && this.state.articles.map((element)=>{
        return  <div className='col-md-4' key = {element.url}>
      <Newsitem imageUrl={element.urlToImage} tittle ={element.title?element.title:""} descrip={element.description?element.description:""} idUrl={element.url}/>
      </div>
        }) }    
      </div>
      <div className="container my-3 d-flex justify-content-between">
        <button disabled = {this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePrev}> &larr; Previous  </button>
        <button  disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize) } type="button" class="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
      </div>
      </div>
    )
  }
}
export default News;