import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Intro from './Intro'
import About from './About'
import Picture from './Picture'
import SkillSet from './SkillSet'
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid  item xs={12}>
					<Paper className={classes.paper}><Intro /></Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}><About /></Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}><Picture /></Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper className={classes.paper}><SkillSet /></Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>xs=6</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>xs=6</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>xs=3</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
