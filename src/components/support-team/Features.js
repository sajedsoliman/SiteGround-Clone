import React from 'react'

// material-ui imports
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    featureTitle: {

    },
    featureDetail: {
        color: "rgb(205, 170, 114)"
    }
}))

export default function Features() {
    const classes = useStyles()
    return (
        <div className="features down-content">
            <Grid container>
                <Grid className="feature" item xs={12} sm={6} lg={3}>
                    <div className="box">
                        <div className="feature__img">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><path fill="rgb(205, 170, 114)" d="M68.166,36.62a1.5,1.5,0,0,0-2.07-.462L50.265,46.216a3.171,3.171,0,0,0-4.211-.488l-18.8-18.1a1.5,1.5,0,1,0-2.081,2.161L44.713,48.6a3.184,3.184,0,0,0,6.2.756L67.7,38.691A1.5,1.5,0,0,0,68.166,36.62Z" /><path fill="rgb(205, 170, 114)" d="M89.666,46.705l-20.25-35.5a1.5,1.5,0,0,0-1.3-.757H26.864a1.5,1.5,0,0,0-1.314.776L5.3,47.959a1.5,1.5,0,0,0,.022,1.487l20.25,34.266a1.5,1.5,0,0,0,1.292.736h42a1.5,1.5,0,0,0,1.315-.777l19.5-35.5A1.5,1.5,0,0,0,89.666,46.705ZM67.976,81.448H49.8V73.356a1.5,1.5,0,0,0-3,0v8.092H27.72L8.914,49.628H22.259a1.5,1.5,0,0,0,0-3H9.46l18.289-33.18H46.8V22.51a1.5,1.5,0,0,0,3,0V13.448H67.243l18.926,33.18H72.5a1.5,1.5,0,0,0,0,3H85.455Z" /></svg>
                        </div>
                        <Typography className={classes.featureTitle} variant="h6">Available 24/7</Typography>
                        <Typography className={classes.featureDetail} gutterBottom variant="h6">Round-the-clock help center</Typography>
                    </div>
                </Grid>

                <Grid className="feature" item xs={12} sm={6} lg={3}>
                    <div className="box">
                        <div className="feature__img">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><path fill="rgb(205, 170, 114)" d="M95.079,36.006a1.5,1.5,0,0,0-1.357-.517L67.494,39.22,49.809,6.505a1.5,1.5,0,0,0-1.293-.787,1.473,1.473,0,0,0-1.32.742L28.049,39.131l-.011,0L2.277,35.475A1.5,1.5,0,0,0,.632,37.4L14.1,81.414a1.5,1.5,0,0,0,1.434,1.061H79.91a1.5,1.5,0,0,0,1.429-1.045l14.024-44A1.5,1.5,0,0,0,95.079,36.006ZM79.262,78.069l-28.355-15.9L71.632,50.624a1.257,1.257,0,0,0,.548-.3L91.543,39.535ZM4.423,39.535,44.758,62.157l-28.551,15.9ZM47.83,63.88,75.636,79.475H19.829ZM84.963,39.765l-13.2,7.352-2.748-5.083ZM48.437,10.275l20.705,38.3L47.835,60.443,26.16,48.287ZM23.543,46.819,10.9,39.728l15.511,2.2Z" /></svg>
                        </div>
                        <Typography className={classes.featureTitle} variant="h6">Proficient & Friendly</Typography>
                        <Typography className={classes.featureDetail} gutterBottom variant="h6">Always eager to help</Typography>
                    </div>
                </Grid>

                <Grid className="feature" item xs={12} sm={6} lg={3}>
                    <div className="box">
                        <div className="feature__img">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><path d="M89.984,23.74h-17.5V13.24a1.5,1.5,0,0,0-1.5-1.5h-65a1.5,1.5,0,0,0-1.5,1.5V74.377a1.5,1.5,0,0,0,2.677.93L20.552,58.368l2.932.091v13.38a1.5,1.5,0,0,0,1.494,1.5l50.627.228L88.8,90.522a1.5,1.5,0,0,0,1.184.579,1.515,1.515,0,0,0,.486-.081A1.5,1.5,0,0,0,91.484,89.6V25.24A1.5,1.5,0,0,0,89.984,23.74ZM19.89,55.346a1.517,1.517,0,0,0-1.223.57L7.484,70.061V14.74h62v9h-44.5a1.5,1.5,0,0,0-1.5,1.5V55.457ZM88.484,85.231,77.525,71.149a1.5,1.5,0,0,0-1.177-.579l-49.864-.224V26.74h62Z" /><path d="M79.091,38.725H36.407a1.5,1.5,0,0,1,0-3H79.091a1.5,1.5,0,0,1,0,3Z" /><path d="M79.091,49.3H36.407a1.5,1.5,0,0,1,0-3H79.091a1.5,1.5,0,0,1,0,3Z" /><path d="M59.605,59.876h-23.2a1.5,1.5,0,0,1,0-3h23.2a1.5,1.5,0,0,1,0,3Z" /></svg>                        </div>
                        <Typography className={classes.featureTitle} variant="h6">Extremely Fast</Typography>
                        <Typography className={classes.featureDetail} gutterBottom variant="h6">Quick pickup & resolution</Typography>
                    </div>
                </Grid>

                <Grid className="feature" item xs={12} sm={6} lg={3}>
                    <div className="box">
                        <div className="feature__img">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><path fill="rgb(205, 170, 114)" d="M91.691,27.781,78.941,15.156a1.5,1.5,0,0,0-1.056-.434H62.208a1.5,1.5,0,0,0-1.026.406L48.5,27.02,36.183,15.143a1.5,1.5,0,0,0-1.041-.421H19.021a1.5,1.5,0,0,0-.943.334L4.421,26.107a1.5,1.5,0,0,0-.556,1.166v21.15A1.5,1.5,0,0,0,4.3,49.482l42.176,42.3a1.5,1.5,0,0,0,2.114.011l42.7-42.013a1.5,1.5,0,0,0,.447-1.04l.4-19.862A1.5,1.5,0,0,0,91.691,27.781Zm-84.826.208L19.552,17.722H34.537L46.969,29.711,46.147,87.2,6.865,47.8Zm81.888,20.08L49.15,87.035l.819-57.281L62.8,17.722H77.268L89.123,29.46Z" /></svg>
                        </div>
                        <Typography className={classes.featureTitle} variant="h6">Top-Rated</Typography>
                        <Typography className={classes.featureDetail} gutterBottom variant="h6">Customer satisfaction</Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
