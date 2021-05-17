import React from 'react'

// material-ui imports
import { Container, Grid } from "@material-ui/core"

// components imports
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"

// other imports
import "../../styles/dist/recentlyLaunched.css"

export default function RecentlyLaunched() {
    return (
        <section className="recently-launched">
            <Container className="container">
                <span className="upper-title">recently launched</span>
                <div className="inner-content">
                    <Grid container >
                        <Grid className="left-side" item xs={12} md={6}>
                            <LeftSide />
                        </Grid>
                        <Grid className="right-side techniques" item xs={12} md={6}>
                            <RightSide />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </section >
    )
}
