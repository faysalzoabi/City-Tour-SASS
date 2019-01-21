import React, { Component } from 'react'
import './TourList.scss';
import Tour from '../Tour/Tour';
import { connect } from 'react-redux';
import {addData} from '../../store/action'



export class TourList extends Component {

componentDidMount() {
  this.props.dispatch(addData())
        }

  render() {
    console.log('props',this.props);
    const {tours} = this.props
    // console.log('tours', tours)
    return (
      <div className="tourlist">
        {tours.map(tour => {
          return(
            <Tour key={tour.id} tour={tour}/>
          )
        })} 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('inmap',state.tours)
    return{
        tours: state.tours
    }
    
}

export default connect(mapStateToProps)(TourList)
