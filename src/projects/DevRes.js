import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Weather from './Weather.png';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import devPic from './devPic.jpg';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		color: '#1f333c',
		// backgroundColor: '#39caf7',
		padding: 20,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	headings: {
		fontFamily: 'Caveat',
		fontSize: 40,
		color: '#1f333c',
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid justify='center' alignItems='center' container spacing={2}>
				<Grid align='center' item sm={12} md={6}>
					<img src={devPic} alt='Weather pic' height='600' width='400' />
				</Grid>
				<Grid align='center' item sm={12} md={6}>
					<h2 className={classes.headings}>Developer Resources</h2>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
				</Grid>
			</Grid>
		</div>
	);
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import devPic from './devPic.jpg'

// const useStyles = makeStyles({
// 	root: {
// 		maxWidth: 345,
// 		maxHeight: 700,
// 	},
// 	media: {
// 		height: '70vh',
// 		width: '100%',
// 		marginTop: 20,
// 	},
// });

// export default function MediaCard() {
// 	const classes = useStyles();

// 	return (
// 		<Card className={classes.root}>
// 			<CardActionArea>
// 				<CardContent>
// 					<Typography gutterBottom variant='h5' component='h2'>
// 						Developer Resources
// 					</Typography>
// 					<Typography variant='body2' color='textSecondary' component='p'>
// 						Sprint Project
// 					</Typography>
// 					<CardMedia
// 						className={classes.media}
// 						image={devPic}
// 						title='Home Page'
// 					/>
// 				</CardContent>
// 			</CardActionArea>
// 			<CardActions>
// 				<Button size='small' color='primary'></Button>
// 				<Button size='small' color='primary'>
// 					Learn More
// 				</Button>
// 			</CardActions>
// 		</Card>
// 	);
// }
