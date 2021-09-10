import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import boot1 from './boot1.jpg';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		color: '#1f333c',
		backgroundColor: '#39caf7',
	},
	paper: {
		textAlign: 'center',
	},
	headings: {
		fontFamily: 'Caveat',
		fontSize: 40,
		color: '#1f333c',
	},
	border: {
		border: '5px solid #5199e4',
		borderRadius: 10,
		marginTop: 20,
		marginBottom: 20,
	},
	button: {
		backgroundColor: '#02a5db',
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid justify='center' alignItems='center' container>
				<Grid item xs={12} sm={6}>
					<h2 className={classes.headings}>
						Bootcamp
						<br />
						Study Guide
					</h2>
					<p style={{ margin: 20 }}>
						Being a Marine Corps veteran, this bootcamp study guide was one of
						my favorite projects. One of my favorite features is the sliding
						menu drawer feature. This is a fullstack app where you can track
						your fitness test results. It is built with the following
						technologies; React, Javascript, Material UI, HTML, CSS, MongoDB,
						Python. I deployed it on netlify.
					</p>
					<Link
						target='_blank'
						rel='noreferrer'
						href='https://pre-boot.netlify.app

'>
						<Button variant='outlined' className={classes.button}>
							See Project
						</Button>
					</Link>
				</Grid>
				<Grid item xs={12} sm={6}>
					<img
						className={classes.border}
						src={boot1}
						alt='bootcamp'
						height='436'
						width='320'
					/>
				</Grid>
			</Grid>
		</div>
	);
}
