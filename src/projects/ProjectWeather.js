
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Weather from './Weather.png';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		color: '#1f333c',
		
		// padding: 20,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		// color: theme.palette.text.secondary,
	},
	headings: {
		fontFamily: 'Caveat',
		fontSize: 40,
		color: '#1f333c',
	},
	border: {
		border: '5px solid #5199e4',
		borderRadius: 10
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid justify='center' alignItems='center' container >
				<Grid item xs={12} sm={6}>
					<h2 className={classes.headings}>Weather App</h2>
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
				<Grid item xs={12} sm={6}>
					<img
						className={classes.border}
						src={Weather}
						alt='Weather pic'
						height='550'
						width='340'
					/>
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
// import Weather from './Weather.png'
// const useStyles = makeStyles({
// 	root: {
// 		maxWidth: 345,
// 		maxHeight: 700,
// 		margin: 'auto'

// 	},
// 	media: {
// 	height: '70vh',
// 	width: '100%'
// 	// margin: 'auto'
// 	},
// });

// export default function MediaCard() {
// 	const classes = useStyles();

// 	return (
// 		<Card className={classes.root}>
// 			<CardActionArea>
// 				<CardMedia
// 					className={classes.media}
// 					image={Weather}
// 					title='Contemplative Reptile'
// 				/>
// 				<CardContent>
// 					<Typography gutterBottom variant='h5' component='h2'>
// 						Project Weather
// 					</Typography>
// 					<Typography variant='body2' color='textSecondary' component='p'>
// 						Get the current weather for any city in the world!
// 					</Typography>
// 				</CardContent>
// 			</CardActionArea>
// 			<CardActions>
// 				<Button size='small' color='primary'>

// 				</Button>
// 				<Button size='small' color='primary'>
// 					Learn More
// 				</Button>
// 			</CardActions>
// 		</Card>
// 	);
// }
