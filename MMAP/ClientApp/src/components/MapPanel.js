import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    map: {
        display: 'flex',
        height: '100%'
    }
});

export default function MapPanel() {
    const classes = useStyles();
    const [state] = React.useState(false);
    const initMap = () => {
        var mapContainer = document.getElementById("mapContainer");
        var mapProp = {
            center: new window.vietbando.LatLng(10.763126, 106.649285),
            zoom: 15,
            minZoom: 2,
            zoomControl: false
        };
        new window.vietbando.Map(mapContainer, mapProp);
    }
    useEffect(() => {
        initMap();
    }, [state]);

    return (<div className={classes.map} id="mapContainer"></div>)
}
