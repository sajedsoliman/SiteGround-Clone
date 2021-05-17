import React from 'react'

// components imports
import ToolsCards from "./ToolsCards"

// Material-ui imports
import { Container, Typography, Divider } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

// other imports
import "../../styles/dist/tools-services.css"

const useStyles = makeStyles(theme => ({
    title: {
        margin: "20px 0",
        fontWeight: 560,
        fontSize: 38,
        [theme.breakpoints.down("xs")]: {
            fontSize: 30
        }
    },
    subTitle: {
        fontSize: 18,
    },
    divider: {
        width: 130,
        height: 4,
        background: "rgb(205, 170, 114)",
        margin: "0 auto 25px",
    }
}))

export default function ToolsAndServices() {
    const classes = useStyles()

    return (
        <div className="tools-services">
            <Container>
                <div className="info">
                    <Divider className={classes.divider} orientation="horizontal" />
                    <Typography className={classes.title} variant="h3">Tools And Services For Seamless Site Building</Typography>
                    <Typography className={classes.subTitle} variant="subtitle1">Website building and management made easy</Typography>
                </div>
                <ToolsCards />
            </Container>
        </div>
    )
}
