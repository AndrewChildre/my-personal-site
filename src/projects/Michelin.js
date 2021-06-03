import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import michelin from './michelin.png';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		color: '#1f333c',
		backgroundColor: '#39caf7',
	},

	headings: {
		fontFamily: 'Caveat',
		fontSize: 50,
		color: '#1f333c',
	},
	border: {
		border: '5px solid #5199e4',
		borderRadius: 10,
		marginTop: 20,
		marginBottom: 20,
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid justify='center' alignItems='center' container>
				<Grid item xs={12} sm={6}>
					<img
						className={classes.border}
						src={michelin}
						alt='Weather pic'
						height='560'
						width='320'
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<h2 className={classes.headings}>Michelin Finder</h2>
					<p style={{ margin: 20 }}>
						This is the Michelin Star Restaurant finder. This was a team
						project with four members. We had a week to complete the entire
						project, from conception to mvp. It was an awesome experience, the
						completed project shows all the hard work we put in. This is a fullstack
						app that is built on the following technologies; React,
						Javascript, Bootstrap, Flexbox, HTML,CSS. The backend uses a custom
						build API from Node.js with Express. It also uses a database with
						MongoDB. This app also was deployed via Heroku.{' '}
					</p>
					<Link
						target='_blank'
						rel='noreferrer'
						href='https://michelin-restaurant-finder.herokuapp.com/'>
						<Button
							style={{ marginBottom: 20 }}
							variant='outlined'
							color='disabled'>
							See More
						</Button>
					</Link>
				</Grid>
			</Grid>
		</div>
	);
}
