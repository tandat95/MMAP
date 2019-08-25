import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    map: {
        width: '100%',
        height: '100%'
    }
});

export default function MapPanel() {
    const classes = useStyles();
    const [state, setState] = React.useState(false);
    const initMap = () => {
        var mapContainer = document.getElementById("mapContainer");
        var mapProp = {
            center: new window.vietbando.LatLng(14.102783, 109.649506),
            zoom: 10,
            minZoom: 2
        };
        var map = new window.vietbando.Map(mapContainer, mapProp);
    }
    useEffect(() => {
        initMap();
    }, [state]);

    return (<div className={classes.map} id="mapContainer"></div>)
}
