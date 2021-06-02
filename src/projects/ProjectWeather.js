import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Weather from './Weather.png';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		color: '#1f333c',
		
		// padding: 20,
	},
	paper: {
		// padding: theme.spacing(2),
		textAlign: 'center',
		// color: theme.palette.text.secondary,
	},
	headings: {
		fontFamily: 'Caveat',
		fontSize: 50,
		color: '#1f333c',
	},
	border: {
		border: '5px solid #5199e4',
		borderRadius: 10,
		marginTop: 20
		
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid justify='center' alignItems='center' container>
				<Grid align='center' item xs={12} sm={6}>
					<h2 className={classes.headings}>Weather App</h2>
					<p style={{ margin: 20 }}>
						This weather forcast app was my second project. It was fun to build, I learned a lot along the way. My favorite part is the when weather data scrolls through screen. It uses the Open Weather API to retreive the weather data from the city that is entered. The following technologies were used. React, Javascript, HTML, CSS, VS Code, Git. I deployed it via Heroku. The Heroku service is slow to launch, so you have to be patient with it. 
					</p>
					<Link href='https://childre-project-weather.herokuapp.com/'>
						<Button variant='outlined' color='disabled'>
							See More
						</Button>
					</Link>
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
