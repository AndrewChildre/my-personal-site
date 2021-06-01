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
	heading: {
			fontFamily: 'Caveat',
		fontSize: 40,
		color: '#39caf7',
		
	}
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container justify='space-evenly' alignItems='center' spacing={3}>
			

				<Grid align='center' item xs={12}>
					<SkillSet />
				</Grid>
					<Grid className={classes.test} item xs={12}>
					<Intro />
				</Grid>
				
				<Grid className={classes.heading} align='center' item xs={12}>
					<h2>Projects</h2>
				</Grid>
				<Grid align='center' item xs={12}>
					<ProjectWeather />
				</Grid>
				<Grid align='center' item xs={12}>
					<Michelin />
				</Grid>
				 <Grid align='center' item xs={12}>
					<PreBoot />
				</Grid>
				<Grid align='center' item xs={12}>
					<CardShuffler />
				</Grid>
				<Grid item xs={12}>
					<FlashCards />
				</Grid>

				<Grid item xs={12}>
					<DevRes />
				</Grid>
			

				<Grid item xs={3}></Grid>
			</Grid>
		</div>
	);
}
