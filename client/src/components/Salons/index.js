import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSalonWithID } from '../../actions/index';

import './styles.css'

class SalonView extends Component {

    state = {
        loading: true
    }

    UNSAFE_componentWillMount() {
        this.props.dispatch(getSalonWithID(this.props.match.params.id))
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({loading: false})
    }

    render() {
        if(this.state.loading) {
            return <div className="loader">Loading...</div>
        }
        return (
            <div>
                {this.props.salons.salon.name}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        salons: state.salons
    }
}

export default connect(mapStateToProps)(SalonView)