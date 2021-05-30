import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import michelin from './michelin.png'
const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		maxHeight: 700,
	},
	media: {
		height: '70vh',
		width: '100%',
	},
});

export default function MediaCard() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={michelin}
					title='Contemplative Reptile'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						Michelin Finder
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						Get the current weather for any city in the world!
					</Typography>
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
