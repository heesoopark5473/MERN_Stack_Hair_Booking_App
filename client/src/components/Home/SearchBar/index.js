import React, { Component } from 'react';
import { connect }          from 'react-redux';
import Fade                 from 'react-reveal/Fade';
import { getSalons }        from '../../../actions/index';
import SalonItem            from '../SalonItem/index';
import './styles.css';

class SearchBar extends Component {

    state = {
        city: ''
    }

    handleChange = (event) => { this.setState({ city : event.target.value })}

    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(getSalons(5, 'desc', this.state.city))
    }

    renderItems = (salons) => (
        <div className="row">
        {
            salons.list ?
                salons.list.map( item => (
                    <SalonItem {...item} key={item._id}/>
            ))
            :null
        }
        </div>
    )

    render() {
        return(
            <div>
                <form onSubmit={ this.submitForm }>
                    <input
                        className= "searchBar"
                        placeholder= "Enter Your City"
                        value = {this.state.city}
                        onChange = {this.handleChange}
                    />  
                    <Fade right spy={this.state.city}>
                        {this.renderItems(this.props.salons)}
                    </Fade>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        salons: state.salons
    }
}

export default connect(mapStateToProps)(SearchBar)