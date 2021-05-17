import React from 'react'

// material-ui imports
import { Button, Container, Divider, Grid, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { Comment } from '@material-ui/icons'

// component improts


// other imports
import "../../styles/dist/footer.css"
import footerContent from "./content"

const useStyles = makeStyles(theme => ({
    columnTitle: {
        color: "rgb(119 119 102)",
        textTransform: "uppercase",
        fontSize: 17,
        fontWeight: 540,
        marginBottom: 25
    },
    commentsButton: {
        fontSize: 12,
        color: "inherit",
        textTransform: "capitalize"
    },
    divider: {
        background: "rgb(119 119 102)",
        marginTop: 20,
        marginBottom: 30
    },
    horDivider: {
        height: 23,
        background: "rgb(119 119 102)",
        width: .5,
        display: "inline-block",
        margin: "0 8px -6px",
    },
    subtitle: {
        color: "rgb(164 164 164)",
        marginTop: 7
    }
}))

export default function Footer() {
    const classes = useStyles()

    let content = footerContent.map(column => (
        <Grid className="footerGrid" item xs={6} md={3} lg={3}>
            <Typography className={classes.columnTitle} variant="subtitle1" color="textSecondary">{column.title}</Typography>
            <ul className="column__links-list">
                {column.links.map(link => <li><a href="/">{link.text}</a></li>)}
            </ul>
        </Grid>
    ))

    return (
        <footer className="footer">

            <Container className="container">
                <Grid container spacing={3}>
                    {content}

                    {/* recent from blog columnm (for orgnization) */}
                    <Grid className="footerGrid" item xs={6} md={3} lg={3}>
                        <Typography className={classes.columnTitle} variant="subtitle1" color="textSecondary">recent from blog</Typography>
                        <ul className="column__links-list">
                            <li className="blog-link"><a href="/">More Site Speed Gains with Brotli Compression Algorithm</a></li>
                            <div className="blog-link-controls">
                                <Typography variant="overline">13 Jan, 2021</Typography>
                                <Button className={classes.commentsButton} variant="text" href="/" startIcon={<Comment />}>Comments</Button>
                            </div>

                            <li className="blog-link"><a href="/">Wrapping Up 2020: Service Enhancements, 97.7% Client Satisfaction (& A Gift To You)</a></li>
                            <div className="blog-link-controls">
                                <Typography variant="overline">11 Jan, 2021</Typography>
                                <Button className={classes.commentsButton} variant="text" href="/" startIcon={<Comment />}>Comments</Button>
                            </div>
                        </ul>
                    </Grid>
                </Grid>

                <Divider className={classes.divider} orientation="inset" />

                <div className="copyright-footer">
                    <div className="left-side copyright">
                        <div className="upper-links">
                            <a href="/">Terms and Conditions</a>
                            <Divider className={classes.horDivider} />
                            <a href="/">Privacy</a>
                        </div>
                        <Typography className={classes.subtitle} variant="body2">&copy; 2021 Sajed Soliman Ltd. All rights reserved.</Typography>
                    </div>
                    <div className="right-side socials">
                        <ul className="socials-list">
                            <li>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 42.9"><title>Facebook</title><path d="M13.3,14.1H20l-.8,7.4H13.3V42.9H4.4V21.5H0V14.1H4.4V9.6q0-4.7,2.2-7.2T14,0h5.9V7.4H16.3l-1.6.2a1.4,1.4,0,0,0-.9.6,2.6,2.6,0,0,0-.4.9,8,8,0,0,0-.1,1.3v3.7Z" fill="#fff" /></svg>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16.2"><title>Twitter</title><path d="M20,1.9A8.6,8.6,0,0,1,17.9,4c0,.1,0,.3,0,.5a11.7,11.7,0,0,1-.5,3.3A11.9,11.9,0,0,1,16,11a12.4,12.4,0,0,1-2.3,2.7,10.4,10.4,0,0,1-3.3,1.9,12,12,0,0,1-4.1.7A11.4,11.4,0,0,1,0,14.4H1a8,8,0,0,0,5.1-1.8A4.1,4.1,0,0,1,2.2,9.9H4.1A4,4,0,0,1,1.7,8.4,4,4,0,0,1,.8,5.8h0a4.1,4.1,0,0,0,1.9.5A4.1,4.1,0,0,1,1.3,4.8a4,4,0,0,1-.5-2A4,4,0,0,1,1.4.7a11.6,11.6,0,0,0,3.7,3A11.4,11.4,0,0,0,9.8,5a4.6,4.6,0,0,1-.1-.9,4,4,0,0,1,1.2-2.9,4.1,4.1,0,0,1,5.9.1,8,8,0,0,0,2.6-1,4,4,0,0,1-1.8,2.3A8.2,8.2,0,0,0,20,1.9Z" fill="#fff" /></svg>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Instagram</title><path d="M10,1.8c2.67,0,3,0,4,.06a5.61,5.61,0,0,1,1.86.34,3.33,3.33,0,0,1,1.9,1.9A5.61,5.61,0,0,1,18.14,6c.05,1,.06,1.37.06,4s0,3-.06,4a5.61,5.61,0,0,1-.34,1.86,3.33,3.33,0,0,1-1.9,1.9,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.61,5.61,0,0,1,4.1,17.8a3.33,3.33,0,0,1-1.9-1.9A5.61,5.61,0,0,1,1.86,14c-.05-1-.06-1.37-.06-4s0-3,.06-4A5.61,5.61,0,0,1,2.2,4.1,3.33,3.33,0,0,1,4.1,2.2,5.61,5.61,0,0,1,6,1.86c1-.05,1.37-.06,4-.06M10,0C7.28,0,6.94,0,5.88.06A7.59,7.59,0,0,0,3.45.52,4.85,4.85,0,0,0,1.68,1.68,4.85,4.85,0,0,0,.52,3.45,7.59,7.59,0,0,0,.06,5.88C0,6.94,0,7.28,0,10s0,3.06.06,4.12a7.59,7.59,0,0,0,.46,2.43,4.85,4.85,0,0,0,1.16,1.77,4.85,4.85,0,0,0,1.77,1.16,7.59,7.59,0,0,0,2.43.46C6.94,20,7.28,20,10,20s3.06,0,4.12-.06a7.59,7.59,0,0,0,2.43-.46,5.19,5.19,0,0,0,2.93-2.93,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12a7.59,7.59,0,0,0-.46-2.43,4.85,4.85,0,0,0-1.16-1.77A4.85,4.85,0,0,0,16.55.52,7.59,7.59,0,0,0,14.12.06C13.06,0,12.72,0,10,0Z" fill="#fff" /><path d="M10,4.86A5.14,5.14,0,1,0,15.14,10,5.14,5.14,0,0,0,10,4.86Zm0,8.47A3.33,3.33,0,1,1,13.33,10,3.33,3.33,0,0,1,10,13.33Z" fill="#fff" /><circle cx="15.34" cy="4.66" r="1.2" fill="#fff" /></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>

        </footer>
    )
}
