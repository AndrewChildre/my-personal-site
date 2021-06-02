import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import cards1 from './cards1.jpg';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		color: '#1f333c',
		backgroundColor: '#39caf7',
		// padding: 20,
	},
	paper: {
		
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
		marginBottom: 20,
		marginTop: 20
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
						src={cards1}
						alt='Weather pic'
						height='436'
						width='340'
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<h2 className={classes.headings}>Card Shuffler</h2>
					<p style={{ margin: 20 }}>
					The Card Shuffler is something I put together as a code challenge, that I received from an interview. It utilizes a third party to get the card information. I used React, Javascript, HTML, CSS. Deployed to Heroku.
					</p>
					<Link href='https://card-shuffler-1.herokuapp.com/?'>
						<Button style={{ margin: 20 }} variant='outlined' color='disabled'>
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
// import cards from './cards.png';

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
// 						Card Shuffler
// 					</Typography>
// 					<Typography variant='body2' color='textSecondary' component='p'>
// 						Suffles 10 random cards
// 					</Typography>
// 					<CardMedia
// 						className={classes.media}
// 						image={cards}
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
