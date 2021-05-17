import React from "react";

// material-ui imports
import { Button, Container, Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

// components importing
import Reviews from "./Reviews";

// other imports
import "../../styles/dist/reputation.css";

const useStyles = makeStyles((theme) => ({
	upperDivider: {
		width: 130,
		height: 4,
		margin: "0 0 30px",
		background: "rgb(205, 170, 114)",
	},
	title: {
		fontWeight: 640,
		lineHeight: 1.4,
		marginBottom: 40,
	},
	info: {
		opacity: 0.8,
		lineHeight: 1.6,
	},
	reviewsButton: {
		marginTop: 40,
		padding: "5px 30px",
	},
}));

export default function Reputation() {
	const classes = useStyles();

	return (
		<section className="reputation">
			<Container>
				<Grid container>
					<Grid className="left-side content" item xs={12} lg={6}>
						<div className="wrapper">
							<Divider className={classes.upperDivider} orientation="horizontal" />
							<Typography className={classes.title} variant="h4">
								Trusted By Clients And Industry Experts Alike
							</Typography>
							<Typography className={classes.info} paragraph>
								We are hosting 2,000,000 domains while making website owners less stressed, more
								productive, and hopefully just a little happier. We’re honored and humbled by the
								great feedback we receive from our customers on a daily basis. We’re proud to
								measure our customer satisfaction rate at 98%, growing every year for the past five
								years.
							</Typography>
							<Button className={classes.reviewsButton} variant="outlined">
								Read Reviews
							</Button>
						</div>
					</Grid>

					<Grid className="right-side reviews" item xs={12} lg={6}>
						<Reviews />
					</Grid>
				</Grid>
			</Container>
		</section>
	);
}
