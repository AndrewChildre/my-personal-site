import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import me1 from '../Me1.jpg';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		color: '#1f333c',
		backgroundColor: '#39caf7',
		// margin: 20,
		
	},
	paper: {
		padding: theme.spacing(2),
		// textAlign: 'center',
		
	},
	headings: {
		fontFamily: 'Caveat',
		fontSize: 80,
		color: '#1f333c',
		

		
	},
	border: {
		border: '5px solid #5199e4',
		borderRadius: 10,
		
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid  container spacing={2}>
				<Grid item xs={12} md={6}>
					<h2 className={classes.headings}>About Me</h2>
					<p>
						Hello my friends! I am a dedicated full-stack devloper with an
						extensive background in the transportation industry. I have chosen
						to develop a skill set, that gives me the challenges that I need to
						excel. Outside of my passion for software development. I love
						traveling, seeing as much of this beautiful planet as possible.
					</p>
				</Grid>
				<Grid item xs={12} md={6}>
					<img
						className={classes.border}
						src={me1}
						alt='me'
						height='580'
						width='350'
					/>
				</Grid>
			</Grid>
		</div>
	);
}

// import React from 'react';

// const Intro = () => {
//     return (
// 			<div className='intro-1'>

// 				<h1>
// 					Hello, my name is Andrew Childre
// 					<br />I am a full-stack Software Engineer

// 				</h1>

// 			</div>

// 		);
// };

// export default Intro;
