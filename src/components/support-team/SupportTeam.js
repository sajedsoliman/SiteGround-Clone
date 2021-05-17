import React from 'react'

// material-ui imports
import { Container, Divider, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// components importing
import Features from './Features'

// other imports
import "../../styles/dist/support-team.css"

const useStyles = makeStyles(theme => ({
    upperDivider: {
        width: 130,
        height: 4,
        margin: "0 auto 25px",
        background: "rgb(205, 170, 114)"
    },
    title: {
        fontWeight: 630,
        marginBottom: 25,
        [theme.breakpoints.down(400)]: {
            fontSize: 28,
            lineHeight: "38px"
        }
    }
}))

export default function SupportTeam() {
    const classes = useStyles();

    return (
        <section className="support-team">
            <Container>
                <Divider className={classes.upperDivider} variant="inset" orientation="horizontal" />
                <div className="upper-info">
                    <Typography className={classes.title} align="center" variant="h4" color="inherit" component="h2">Expert Hosting Support Our Customers Love</Typography>
                    <Typography align="center" varaint="">Our Customer Care team is among the highest-rated support squads online, fast, multi-skilled and helpful.</Typography>
                </div>
                <Features />
            </Container>
        </section>
    )
}
