import React, { Component } from 'react';

import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from 'react-places-autocomplete';

import './styles.css';

class LocationSearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };

    hairCheck = (types) => {
        // types.map(type => {
        //     if (type == "hair_care" || type == "beauty_salon" || type == "spa") {
        //         return true;
        //     }
        // });
        
        for (const [index,value] of types.entries()) {
            if (value === "hair_care" || value === "beauty_salon" || value === "spa") {
                return true;
            }
        }
        return false;
    }



    render() {
        return(
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >

            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <input
                        {...getInputProps({
                            placeholder: 'Search Places ...',
                        })}
                        className= "searchBar"
                    />
                    <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading ...</div>}
                        {suggestions.map(suggestion => {

                            const checkType = this.hairCheck(suggestion.types);
                            
                            if (checkType === true) {
                                console.log(suggestion);
                                const className = suggestion.active
                                ? 'suggestion-item--active'
                                : 'suggestion-item';

                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' }
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            }

                        })}
                    </div>
                </div>
            )} 
            </PlacesAutocomplete>
        );
    }
}

export default LocationSearchInput;