import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import landing from './landing.png'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		color: '#1f333c',
		backgroundColor: '#39caf7',
	},

	headings: {
		fontFamily: 'Caveat',
		fontSize: 45,
		color: '#1f333c',
		marginLeft: 20,
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
				<Grid align='center' item xs={12} sm={6}>
					<h2 className={classes.headings}>Death Stalker</h2>
					<p style={{ margin: 20 }}>
						This was a challenging project for me, I had to learn kaboom.js, as
						well as Replit to make sure I could complete it.These technologies
						were not that difficult to learn, as I have been working extremely
						hard on my javascript fundamentals. The most difficult part of this
						project was how to use and edit sprites. Also learning how to
						dissect a sprite-sheet was totally new to me. I used a web based
						program called Piskel. It was a great program to accomplish what I
						needed to do. Overall I learned a lot and am happy with the way my
						project turned out. Not mobile friendly yet.
					</p>

					<Link
						target='_blank'
						rel='noreferrer'
						href='https://death-stalker.netlify.app/'>
						<Button
							className={classes.button}
							style={{ marginBottom: 20 }}
							variant='outlined'
							color='disabled'>
							See Project
						</Button>
					</Link>
				</Grid>
				<Grid align='center' item xs={12} sm={6}>
					<img
						className={classes.border}
						src={landing}
						alt='death angel'
						height='320'
						width='330'
					/>
				</Grid>
			</Grid>
		</div>
	);
}
