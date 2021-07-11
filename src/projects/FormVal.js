import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import formVal from '../projects/formVal.png'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		color: '#1f333c',
		
	},

	headings: {
		fontFamily: 'Caveat',
		fontSize: 45,
		color: '#1f333c',
		marginLeft: 20
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
				<Grid align='center' item xs={12} sm={6}>
					<img 
						className={classes.border}
						src={formVal}
						alt='Weather pic'
						height='300'
						width='330'
					/>
				</Grid>
				<Grid align='center' item xs={12} sm={6}>
					<h2 className={classes.headings}>Form Validation</h2>
					<p style={{ margin: 20 }}>
					This is a personal project that I undertook to demonstrate new skills I have developed. I have learned Typescript, along with getting more proficient with node packages. The technologies that I used are React, Typescript, HTML, CSS. I also used 3 different node packages, react-hook-form, react-modal, and react-confetti.
					</p>
					<Link
						target='_blank'
						rel='noreferrer'
						href='https://not-a-give-away.netlify.app/'>
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
