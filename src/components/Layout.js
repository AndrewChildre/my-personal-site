import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Intro from './Intro'
import About from './About'
import Picture from './Picture'
import SkillSet from './SkillSet'
import ProjectWeather from '../projects/ProjectWeather'
import Michelin from '../projects/Michelin'
import PreBoot from '../projects/PreBoot'
import CardShuffler from '../projects/CardShuffler'
import FlashCards from '../projects/FlashCards'
import DevRes from '../projects/DevRes'
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin: 10
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	test: {
		textAlign: 'center',
		// backgroundColor: 'blue',
		
		
	
		
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container justify='space-evenly' alignItems='center' spacing={3}>
				{/* <Grid className={classes.test} item xs={12}>
					<Intro />
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
						<path
							fill='#65c9ff'
							fill-opacity='1'
							d='M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,101.3C672,96,768,128,864,165.3C960,203,1056,245,1152,266.7C1248,288,1344,288,1392,288L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'></path>
					</svg>
				</Grid> */}

				<Grid align='center' item xs={12}>
					<SkillSet />
				</Grid>
				<Grid align='center' item xs={4}>
					<ProjectWeather />
				</Grid>
				<Grid align='center' item xs={4}>
					<Michelin />
				</Grid>
				<Grid align='center' item xs={4}>
					<PreBoot />
				</Grid>
				<Grid item xs={4}>
					<CardShuffler />
				</Grid>
				<Grid item xs={4}>
					<FlashCards />
				</Grid>

				<Grid item xs={4}>
					<DevRes />
				</Grid>
				<Grid className={classes.test} item xs={5}>
					<Picture />
				</Grid>
				<Grid item xs={5}>
					<About />
				</Grid>

				<Grid item xs={3}></Grid>
			</Grid>
		</div>
	);
}
