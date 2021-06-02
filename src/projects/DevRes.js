import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import hack1 from './hack1.jpg';
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
		fontSize: 45,
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
				<Grid align='center' item xs={12} sm={6}>
					<img
						className={classes.border}
						src={hack1}
						alt='Weather pic'
						height='436'
						width='340'
					/>
				</Grid>
				<Grid align='center' item xs={12} sm={6}>
					<h2 className={classes.headings}>Developer Resources</h2>
					<p style={{ margin: 20 }}>
						The Developer Resources app was a sprint project that I did. We were challenged to use a technology that we had not used previously. This is where I started using Material UI. I used the card component specifically to get the layout I wanted. The app is rough around the edges, but it does what I set out to accomplish. This one is on Heroku.
					</p>
					<Link href='https://hack-pro-ac.herokuapp.com/boxes'>
						<Button variant='outlined' color='disabled'>
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
