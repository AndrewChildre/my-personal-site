import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Intro from './Intro';
import SkillSet from './SkillSet';
import ProjectWeather from '../projects/ProjectWeather';
import Michelin from '../projects/Michelin';
import PreBoot from '../projects/PreBoot';
import CardShuffler from '../projects/CardShuffler';
import FlashCards from '../projects/FlashCards';
import FormVal from '../projects/FormVal'
import Game from '../projects/Game'
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},

	heading: {
		fontFamily: 'Caveat',
		fontSize: 50,
		color: '#39caf7',
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid justify='space-evenly' alignItems='center'>
				<Grid align='center' item sm={12}>
					<SkillSet />
				</Grid>
				<Grid align='center' item xs={12}>
					<Intro />
				</Grid>

				<Grid className={classes.heading} align='center' item xs={12}>
					<h2>Projects</h2>
				</Grid>
				<Grid>
					<Game />
				</Grid>
				<Grid>
					<FormVal />
				</Grid>
				<Grid align='center' item xs={12}>
					<PreBoot />
				</Grid>
				<Grid align='center' item sm={12}>
					<Michelin />
				</Grid>
				<Grid align='center' item sm={12}>
					<ProjectWeather />
				</Grid>
				<Grid align='center' item sm={12}>
					<CardShuffler />
				</Grid>
				<Grid item sm={12}>
					<FlashCards />
				</Grid>
			</Grid>
		</div>
	);
}
