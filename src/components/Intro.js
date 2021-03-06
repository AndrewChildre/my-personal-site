import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import me1 from '../Me1.jpg';
import Resume11 from '../Resume11.pdf';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		color: '#1f333c',
		backgroundColor: '#39caf7',
		marginTop: 280,
	},

	headings: {
		fontFamily: 'Caveat',
		fontSize: 80,
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
			<Grid container>
				<Grid item xs={12} md={6}>
					<h2 className={classes.headings}>About Me</h2>
					<h3 style={{ margin: 20 }}>
						Hello my friends! I am a dedicated full-stack developer with an
						extensive background in the transportation industry. I continue to
						develop my skill set that gives me the challenges that I need to
						excel. I’m a highly motivated person that loves to code. I take
						challenges head on, and never quit. I believe I would be a valuable
						addition to anyone's team. Outside of my passion for software
						development, I love traveling and seeing as much of this beautiful
						planet as possible.
						<br />
						<br />
						I'm currently looking for new opportunities, and would be happy to
						connect with you.
					</h3>
					<Link target='_blank' href={Resume11}>
						<Button
							className={classes.button}
							variant='outlined'>
							Resume
						</Button>
					</Link>
					<Link
						style={{ marginLeft: 20 }}
						target='_blank'
						href='mailto:andrewchildre@gmail.com'>
						<Button
							className={classes.button}
							variant='outlined'
							color='disabled'>
							Email
						</Button>
					</Link>
				</Grid>
				<Grid item xs={12} md={6}>
					<img
						className={classes.border}
						src={me1}
						alt='Andrew C'
						height='580'
						width='350'
					/>
				</Grid>
			</Grid>
		</div>
	);
}
