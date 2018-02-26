import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import ReactDOM from 'react-dom'
import Geocode from "react-geocode"




class MapContainer extends Component {


    //####################################################### API GOOGLE MAP   
    state = {
        lat: "",
        lng: "",
        address: "3960 Live Oak Drive Doraville,GA",
    }
    getGeocode = () => {
        // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
        Geocode.setApiKey("AIzaSyCkLkbWR6ffwKyt0iZWK1ocErVK11Yi8M4");
        // Get latidude & longitude from address.
        Geocode.fromAddress(this.state.address).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
                this.setState({ lat: lat, lng: lng })
            });
    }

    options = {
        enableHighAccuracy: true,
        timeout: 8000,
        maximumAge: 1
    }


    error = (err) => {
        console.log(`ERROR(${err.code}): ${err.message}`)
    }
    getLocation = async () => {

        const location = await navigator.geolocation.getCurrentPosition(this.error, this.options)
        try {
        } catch (error) {

        }
    }
    componentWillReceiveProps() {

        navigator.geolocation.getCurrentPosition(this.getGeocode, this.error, this.options)
    }

    render() {
        const style = {
            width: '50vw',
            height: '50vh'
        }
        console.log('from render:' + this.state.lat)
        return (
            <div>
                {
                    this.state.address === null ?
                        <div>Please wait, loading...</div> :
                        <Map google={this.props.google}
                            style={style}
                            center={{ lat: this.state.lat, lng: this.state.lng }}
                            zoom={10}>
                            <Marker
                                onClick={this.onMarkerClick}
                                name={'Current location'} />
                        </Map>
                }
            </div>
        )

    }
}




export default GoogleApiWrapper({
    apiKey: 'AIzaSyCkLkbWR6ffwKyt0iZWK1ocErVK11Yi8M4'
})(MapContainer)