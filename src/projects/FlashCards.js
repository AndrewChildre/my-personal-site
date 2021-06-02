import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import flash1 from './flash1.jpg';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		color: '#1f333c',
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
		maginBottom: 20,
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid justify='center' alignItems='center' container>
				<Grid align='center' item xs={12} sm={6}>
					<h2 align='center' className={classes.headings}>
						Flash Cards
					</h2>
					<p style={{ margin: 20 }}>
						My Flash Cards app is special to me, this was the first project that
						I completed. It was very challenging at the time I built it,
						although I did learn so much in the process of making it. This one
						is built on HTML, CSS, Javascript, and Boostrap. It is also deployed
						on Heroku.
					</p>
					<Link
						target='_blank'
						rel='noreferrer'
						href='https://andrewchildre.github.io/Flash-Cards/'>
						<Button variant='outlined' color='disabled'>
							See More
						</Button>
					</Link>
				</Grid>
				<Grid align='center' item xs={12} sm={6}>
					<img
						className={classes.border}
						src={flash1}
						alt='Weather pic'
						height='550'
						width='330'
					/>
				</Grid>
			</Grid>
		</div>
	);
}
