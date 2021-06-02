import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Weather from './Weather.png';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import michelin from './michelin.png';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		color: '#1f333c',
		backgroundColor: '#39caf7',
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
		marginTop: 20,
		marginBottom: 20
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid justify='center' alignItems='center' container>
				<Grid item xs={12} sm={6}>
					<img
						className={classes.border}
						src={michelin}
						alt='Weather pic'
						height='560'
						width='320'
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<h2 className={classes.headings}>Michelin Finder</h2>
					<p style={{ margin: 20 }}>This is the Michelin Star Restaurant finder app. This was a team project with four members. We had a week to complete the entire project, from conception to mvp. It was an awesome experience, the completed project shows all the work we put in. This is a full stack app that is built on the following technologies. React.js, Javascript, Bootstrap, Flexbox, HTML,CSS. The backend uses a custom build API from Node.js with Express. It also uses a database with MongoDB. This app also was deployed via Heroku.  </p>
					<Link href='https://michelin-restaurant-finder.herokuapp.com/'>
						<Button
							style={{ marginBottom: 20 }}
							variant='outlined'
							color='disabled'>
							See More
						</Button>
					</Link>
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
// import michelin from './michelin.png'
// const useStyles = makeStyles({
// 	root: {
// 		maxWidth: 320,
// 		minWidth: 320,
// 		margin: 10,
// 		// maxHeight: 700,
// 	},
// 	media: {
// 		// maxWidth: 320,
// 		// maxHeight: 400
// 		margin: 10,
// 		height: '70vh',
// 		// width: '100%',
// 	},
// });

// export default function MediaCard() {
// 	const classes = useStyles();

// 	return (
// 		<Card className={classes.root}>
// 			<CardActionArea>
// 				<CardMedia

// 					classes={{
// 						root: classes.media
// 					}}

// 					image={michelin}
// 					title='Contemplative Reptile'
// 				/>
// 				<CardContent>
// 					<Typography gutterBottom variant='h5' component='h2'>
// 						Michelin Finder
// 					</Typography>
// 					<Typography variant='body2' color='textSecondary' component='p'>
// 						Get the current weather for any city in the world!
// 					</Typography>
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
