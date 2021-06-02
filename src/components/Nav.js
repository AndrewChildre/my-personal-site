import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Avatar from './Avatar';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
		fontFamily: 'Dancing Script',
		fontSize: 41,
	},
	style1: {
		backgroundColor: '#65c9ff',
		color: '#1f333c',
		padding: 0,
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar classes={{ root: classes.style1 }} position='fixed'>
				<Toolbar>
					<Avatar />
					<Typography align='center' variant='h6' className={classes.title}>
						Andrew Childre
					</Typography>

					<a href='https://github.com/AndrewChildre'>
						<img
							src='https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg'
							alt='GitHub'
							width='40'
							height='40'
							style={{
								marginRight: 15,
								backgroundColor: '#5199e4',
								borderRadius: 20,
							}}
						/>
					</a>
					<a href='https://www.linkedin.com/in/andrew-childre/'>
						<img
							src='https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-plain.svg'
							alt='Linkedin'
							width='40'
							height='40'
							style={{
								marginRight: 10,
								backgroundColor: '#5199e4',
								borderRadius: 10,
							}}
						/>
					</a>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</div>
	);
}
