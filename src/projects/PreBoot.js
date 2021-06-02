import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import boot1 from './boot1.jpg';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
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
		fontSize: 40,
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
					<h2 className={classes.headings}>
						Bootcamp
						<br />
						Study Guide
					</h2>
					<p style={{ margin: 20 }}>
						Being a Marine Corps veteran, this bootcamp study guide was one of my favorite projects. 
					</p>
					<Link href='https://pre-boot-frontend.herokuapp.com/'>
						<Button variant='outlined' color='disabled'>
							See More
						</Button>
					</Link>
				</Grid>
				<Grid item xs={12} sm={6}>
					<img
						className={classes.border}
						src={boot1}
						alt='Weather pic'
						height='436'
						width='320'
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
// import usmc1 from './usmc1.png'

// const useStyles = makeStyles({
// 	root: {
// 		maxWidth: 345,
// 		maxHeight: 700,
// 	},
// 	media: {
// 		height: '70vh',
// 		width: '100%',
//         marginTop: 20
// 	},
// });

// export default function MediaCard() {
// 	const classes = useStyles();

// 	return (
// 		<Card className={classes.root}>
// 			<CardActionArea>
// 				<CardContent>
// 					<Typography gutterBottom variant='h5' component='h2'>
// 						USMC Pre-bootcamp
// 					</Typography>
// 					<Typography variant='body2' color='textSecondary' component='p'>
// 						Study guide for recruits going to bootcamp
// 					</Typography>
// 					<CardMedia
// 						className={classes.media}
// 						image={usmc1}
// 						title='USMC Pre-Bootcamp'
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
