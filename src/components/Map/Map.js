import {Map , GoogleApiWrapper} from 'google-maps-react'

const MapContainer = ({google }) => {

    const mapStyles={
        width: '80%',
        height: '400px',
        margin: '1rem auto'
    }
    return ( 

            <Map google={google} zoom={14} style={mapStyles} 
            initialCenter={
                {
                    lat: -1.2884,
                    lng: 36.8233
                }
                } /> 
    );
}
 
export default GoogleApiWrapper({
    apiKey: 'AIzaSyB7ZEHuAP5v38rzxN2NYxFrCOtGXOLbn8I'
  })(MapContainer);