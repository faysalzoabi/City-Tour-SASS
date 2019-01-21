import React, { Component } from 'react'
import {removeData} from '../../store/action'
import { connect } from 'react-redux';
import './Tour.scss';

export class Tour extends Component {
  state = {
    showInfo:false
  }

  handleInfo = () => {
    this.setState({ showInfo:!this.state.showInfo  });
  }

  removeItem = (id) => {
    console.log('inremove', id);
    this.props.dispatch(removeData(id))
  }
  render() {
    const {id,city,img,name,info} = this.props.tour
    return (
      <article className="tour">
        <div className="img-container">
            <img src={img} alt=""/>
        <span onClick={() => this.removeItem(id)} className="close-btn">
            <i className="fas fa-window-close"></i>
        </span>
        </div>
        <div className="tour-info">
            <h3>{city}</h3>
            <h4>{name}</h4>
            <h5>
              info{" "} 
              <span onClick={this.handleInfo}><i className="fas fa-caret-square-down"></i></span>
            </h5>
            {this.state.showInfo && <p>{info}</p>}
            
        </div>
        
      </article>
    )
  }
}

export default connect()(Tour)
