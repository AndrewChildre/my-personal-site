import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import avataaars from './avataaars.png'


const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(),
		},
	},
}));

export default function ImageAvatars() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Avatar src={avataaars} />
		
		</div>
	);
}
