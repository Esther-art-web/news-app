import React, { Component } from 'react';

class RenderSportsComponent extends Component {
    state = {  }
    render() { 
        return ( 

            <div>
                {this.props.info.map(info =>{

                return(
                info.sports.map(sports => sports.title=== this.props.match.params.title? (
                
                <div className='container'>
                    <div className= 'row row-content'>
                    <h1> { sports.title }</h1>
                        <img src={sports.urlToImage} width="100%"/>
                        <div className='row'>
                            {sports.content} 
                        </div>
                        <p>Source: {sports.author}</p>
                    </div>
                    
                </div>)
            
                : 
                
            null)
            );
                })}
            
            
            
            </div>
         );
    }
}
 
export default RenderSportsComponent;