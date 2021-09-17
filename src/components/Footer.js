import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	stlying: {
		fontFamily: 'Caveat',
		fontSize: 40,
		color: '#39caf7',
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid align='center' container>
				<Grid item xs={12}>
					<h3 className={classes.stlying}>
						Thank you for visiting!
						<br />
						Andrew C
					</h3>
				</Grid>
				<Grid item xs={12}></Grid>
			</Grid>
		</div>
	);
}
