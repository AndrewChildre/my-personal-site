import React from 'react';
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from './Avatar';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		// marginBottom: 150,
	},
	title: {
		flexGrow: 1,
		fontFamily: 'Dancing Script',
		fontSize: 41,
	},
	style1: {
		backgroundColor: '#65c9ff',
		color: '#1f333c',
		width: '100%',
		
	},
}));

// classes={{root: classes.style1}} 

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div  className={classes.root}>
			<AppBar classes={{ root: classes.style1 }} position='fixed'>
				<Toolbar>

					{/* <IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'>
						<MenuIcon />
					</IconButton> */}
					<Avatar />
					<Typography align='center' variant='h6' className={classes.title} >
						Andrew Childre
					</Typography>
					{/* <Button color='inherit'>Login</Button> */}
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
			< Toolbar />
		</div>
	);
}
