import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import usmc1 from './usmc1.png'

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		maxHeight: 700,
	},
	media: {
		height: '70vh',
		width: '100%',
        marginTop: 20
	},
});

export default function MediaCard() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						USMC Pre-bootcamp
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						Study guide for recruits going to bootcamp
					</Typography>
					<CardMedia
						className={classes.media}
						image={usmc1}
						title='USMC Pre-Bootcamp'
					/>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size='small' color='primary'></Button>
				<Button size='small' color='primary'>
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
}
