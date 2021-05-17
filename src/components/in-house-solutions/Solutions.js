import React from 'react'

// material-ui improts
import { Grid, Typography, Divider, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

// components importing
import Features from './Features'

// other imports
import "../../styles/dist/solutions.css"


const useStyles = makeStyles(theme => ({
    divider: {
        width: 130,
        height: 4,
        background: "rgb(205, 170, 114)",
        margin: "0 auto 25px",
    },
    mainTitle: {
        fontSize: 40,
        fontWeight: 600,
        margin: "30px auto 20px"
    },
    subHeading: {
        fontSize: 20,
    }
}))

export default function Solutions() {
    const classes = useStyles();

    return (
        <section className="in-house-solutions" id="in-house-solutions">
            <Container>
                <Divider className={classes.divider} orientation="horizontal" />
                <div className="upper-content">
                    <Typography className={classes.mainTitle} variant="h2">Powerful solutions built in-house</Typography>
                    <Typography className={classes.subHeading} paragraph color="textPrimary">We create in-house solutions that make your sites run faster and stay safe</Typography>
                </div>
                <Features />
            </Container>
        </section>
    )
}
