import React, { Component }                         from 'react';
import { connect }                                  from 'react-redux';
import { Card, ListGroup, ListGroupItem, Button }   from 'react-bootstrap';
import { Rating }                                   from '@material-ui/lab';
import { Link }                                     from 'react-router-dom';
import { getSalons }                                from '../../../actions/index';
import ReactGoogleMapImage from 'react-google-map-image';
import './styles.css';

class Recommendation extends Component {

    UNSAFE_componentWillMount() {
        this.props.dispatch(getSalons(5, 'desc'))
    }

    imageClick = () => {
        console.log("Image Clicked!")
    }

    renderItems = (salons) => (
        
        salons.list ?
            salons.list.map( (item,i) => (
                <div key={i} className="col-md-6 col-lg-3 mb-5 mb-lg-0" style={{marginTop:"5%"}}>
                    <Card className="card" style={{ width: '18rem', borderRadius: "25px", padding:"1rem" }}>
                        {/* <Card.Img variant="top" src= {this.retImage} style={{borderRadius: "25px"}}/> */}
                        <div
                            onClick={this.imageClick}
                            style={{cursor: "pointer"}}
                        >
                            <ReactGoogleMapImage
                                config={{
                                    center: item.address + ',' + item.city + ',' + item.province + ',' + item.postalCode,
                                    size: '500x240', 
                                    zoom: '15',
                                    key: 'AIzaSyBBhOq36Bo-95zvjaXqoL5OSqdA8wZ6iM8', 
                                    maptype: 'roadmap'
                                }}
                                wrapperStyle={{width: '100%'}}
                                style={{width: '100%', height: 'auto', borderRadius:"15px"}}
                            />
                        </div>
                            <Card.Body>
                                <Card.Title className="text-center">{item.name}</Card.Title>
                                <Card.Text>
                                    {item.address}, {item.city}, {item.province}, {item.postalCode}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Ph. {item.phoneNumber}</ListGroupItem>
                                <ListGroupItem>
                                    <Rating 
                                        name="half-rating-read"
                                        defaultValue={item.rating}
                                        precision={0.5}
                                        readOnly
                                    />
                                </ListGroupItem>
                            </ListGroup>
                            
                            <Link to={`/salons/${item._id}`} style={{marginTop:"1rem"}}>
                                <Button variant="outline-success" style={{width:"100%"}}>
                                    Book Now
                                </Button>
                            </Link>
                    </Card>
                </div>
            ))
        :null
    )

    render() {
        return(
            <div style={{backgroundColor: "grey"}}>
                <div className="row">
                    {this.renderItems(this.props.salons)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        salons: state.salons
    }
}

export default connect(mapStateToProps)(Recommendation)