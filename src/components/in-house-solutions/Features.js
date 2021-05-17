import React from 'react'

// material-ui improts
import { Grid, InputLabel, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
    featureTitle: {
        fontWeight: 500,
        fontSize: 30
    },
    subTitle: {
        margin: "5px 0 20px",
        fontSize: 17.5
    },
    featureContent: {
        lineHeight: "26px",
        fontSize: 17,
        marginTop: 40
    }
}))


export default function Features() {
    const classes = useStyles();

    return (
        <div className="features">
            <Grid className="feature" container>
                <Grid className="feature__content left-side" item xs={12} lg={8}>
                    <Typography variant="h4" className={classes.featureTitle}>Technical superiority</Typography>
                    <Typography className={classes.subTitle} variant="subtitle2" color="textSecondary">Fast adoption of the best technologies and in-house built solutions</Typography>
                    <Typography className={classes.featureContent} paragraph>Developing smart in-house solutions and adopting innovative technology is our passion and our craft. We were pioneers in secure account isolation and among the first to use Linux containers. We heavily customized this new lightweight virtualization method to ensure it matches our security and reliability standards. We introduced a custom Let’s Encrypt SSL integration for our clients as soon as it came out. We developed a proprietary AI software preventing over 5 million brute-force attacks every day. And that’s just the beginning. We never stop innovating to bring you the best service possible.</Typography>
                </Grid>
                <Grid className="feature__img right-side" item xs={12} lg={4}>
                    <img src="https://du3vkre908mr5.cloudfront.net/img/graphics/3d_crane_purple.png" alt="Technical superiority" title="Feature" />
                </Grid>
            </Grid>

            <Grid className="feature security" container>
                <Grid className="feature__img right-side" item xs={12} lg={4}>
                    <img src="https://d3fjrnfgbgznt3.cloudfront.net/img/graphics/3d_laptop_orange.png" alt="Fully-managed service" />
                </Grid>
                <Grid className="feature__content left-side" item xs={12} lg={8}>
                    <Typography variant="h4" className={classes.featureTitle}>Fully-managed service</Typography>
                    <Typography className={classes.subTitle} variant="subtitle2" color="textSecondary">Managed service for more convenience</Typography>
                    <Typography className={classes.featureContent} paragraph>We believe that managed hosting is a way to empower our clients to focus on their core business and take the hosting maintenance off their chores list. We offer automatic WordPress updates that you can leave on auto-pilot or schedule. We run the latest PHP versions, but allow you to switch between versions. We enable static caching for your website, but you can easily switch it off or add more layers, like dynamic cache and memcached so you get the performance you want.</Typography>
                </Grid>
            </Grid>

            <Grid className="feature" container>
                <Grid className="feature__content left-side" item xs={12} lg={8}>
                    <Typography variant="h4" className={classes.featureTitle}>Security-first Mindset</Typography>
                    <Typography className={classes.subTitle} variant="subtitle2" color="textSecondary">Constant security monitoring and prevention is our standard</Typography>
                    <Typography className={classes.featureContent} paragraph>We have a team of dedicated security experts keeping track of daily software vulnerabilities on a server and website level. They actively write security patches and enhancements to prevent possible attacks. In the past year alone, we added 300 custom rules to our Web Application Firewall that stopped multiple identified-yet-unresolved third-party software vulnerabilities.</Typography>
                </Grid>
                <Grid className="feature__img right-side" item xs={12} lg={4}>
                    <img src="https://damt7w3yoa0t2.cloudfront.net/img/graphics/3d_security_green.png" alt="Security-first Mindset" />
                </Grid>
            </Grid>
        </div>
    )
}
