import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import ReactDOM from 'react-dom'
import Geocode from "../Services/Geocode";
import styled from 'styled-components'


class MapContainer extends Component {

    state = {
        lat: "",
        lng: "",
        address: "Atlanta,GA",
    }
    getGeocode = () => {
        Geocode.fromAddress(this.state.address).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
                this.setState({ lat: lat, lng: lng })
            });
    }

    options = {
        enableHighAccuracy: false,
        timeout: 8000,
        maximumAge: 1
    }

    error = (err) => {
        console.log(`ERROR(${err.code}): ${err.message}`)
    }

    handleChange = (e) => {
        let address = this.state.address
        address = e.target.value
        this.setState({ address })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        this.getGeocode()
        console.log('fromhandsubmit:' + this.state.address)
        this.setState({ address: this.state.address })
    }

    componentWillReceiveProps() {
        navigator.geolocation.getCurrentPosition(this.getGeocode, this.error, this.options)
        this.handleChange
        this.handleSubmit
    }

    render() {
        const { address } = this.state
        const style = {
            width: '45vh',
            height: '60vh',
            opacity: '0.95',
            border:'1px solid darkgray'
        }
        return (
            <Container>
                <h3> Type Your Favorite City</h3>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    Address:
                <input
                        value={this.state.address}
                        type="text"
                        onChange={this.handleChange}
                    />
                    <button type="submit">Save</button>
                </form>
                <br />
                <Map google={this.props.google}
                    style={style}
                    id="map" 
                    center={{ lat: this.state.lat, lng: this.state.lng }}
                    zoom={10}>
                    <Marker
                        // onClick={this.onMarkerClick}
                        name={'Current location'}
                        position={{ lat: this.state.lat, lng: this.state.lng }}
                        icon='https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
                    />
                </Map>
            </Container>
        )
    }
}

// export default MapContainer
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCkLkbWR6ffwKyt0iZWK1ocErVK11Yi8M4'
})(MapContainer)


///////////////////////////////////////////////////////////////////////////////
//// STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////

const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center; */
 position:relative;
left: 40px;
  input{
  background:none;
  border: 1px solid darkgrey;
  border-radius: 2px;
  margin:2px;
  background: white;
  width: 27.5vh;
  height: 4vh;
}

`