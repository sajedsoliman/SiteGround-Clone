import React from 'react'

// components imports
import LandingPageCards from './LandingPageCards'

// material-ui imports
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'


// other imports


const useStyles = makeStyles(theme => ({
    landingPageImage: {
        [theme.breakpoints.down("sm")]: {
            width: 120,
            height: 120,
            top: -52,
            left: -21,
        },
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    },
    paragraph: {
        [theme.breakpoints.down("md")]: {
            fontSize: "18px !important"
        }
    }
}))

export default function LandingPage() {
    const classes = useStyles()

    return (
        <div className="landing-page">
            <Container className="landing-page-wrapper">
                <div className="content">
                    <img className={classes.landingPageImage} src="https://damt7w3yoa0t2.cloudfront.net/img/graphics/3d_origami_crane.png" />
                    <div className="info">
                        <h1 className="title">Web Hosting Platform</h1>
                        <h2>CRAFTED FOR EASY WEBSITE MANAGEMENT</h2>
                        <em className={classes.paragraph}>Trusted by the owners of 2,000,000 domains</em>
                    </div>
                </div>
            </Container>
            <div className="cards">
                <LandingPageCards />
            </div>
        </div>
    )
}
