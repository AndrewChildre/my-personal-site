import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Intro from './Intro'
import About from './About'
import Picture from './Picture'
import SkillSet from './SkillSet'
import ProjectWeather from './ProjectWeather'
import Michelin from './Michelin'
import { red } from '@material-ui/core/colors';
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
		backgroundColor: 'blue',
		margin: 50
		
		
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container justify='space-evenly' alignItems='center' spacing={5}>
				<Grid className={classes.test} item xs={12}>
					<Intro />
				</Grid>

				<Grid align='center' item xs={12}>
					<SkillSet />
				</Grid>
				<Grid align='center' item xs={4}>
					<ProjectWeather />
				</Grid>
				<Grid align='center' item xs={4}>
					<Michelin />
				</Grid>
				<Grid className={classes.test} item xs={6}>
					<Picture />
				</Grid>
				<Grid item xs={6}>
					<About />
				</Grid>
				<Grid item xs={3}></Grid>
			</Grid>
		</div>
	);
}
