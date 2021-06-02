import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		backgroundColor: '#5199e4',
		padding: 20,
		margin: 20,
	},
	headings: {
		fontFamily: 'Caveat',
		fontSize: 50,
		color: '#39caf7',
		marginTop: 90,
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container>
				<Grid item xs={12} sm={4}>
					<h1 className={classes.headings}>Frontend</h1>
					<Paper className={classes.paper}>
						<a href='https://www.w3.org/html/' target='_blank' rel='noreferrer'>
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
								alt='html5'
								width='70'
								height='70'
							/>
						</a>

						<a
							href='https://www.w3schools.com/css/'
							target='_blank'
							rel='noreferrer'>
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'
								alt='css3'
								width='70'
								height='70'
							/>
						</a>
						<a
							href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
							target='_blank'
							rel='noreferrer'>
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
								alt='javascript'
								width='70'
								height='70'
							/>
						</a>
						<a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
								alt='react'
								width='70'
								height='70'
							/>
						</a>
						<a href='https://getbootstrap.com' target='_blank' rel='noreferrer'>
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg'
								alt='bootstrap'
								width='70'
								height='70'
							/>
						</a>
						<a href='https://material-ui.com/' target='_blank' rel='noreferrer'>
							<img
								src='https://raw.githubusercontent.com/AndrewChildre/devicon/master/icons/materialui/materialui-original.svg'
								alt='vs code'
								width='70'
								height='70'
							/>
						</a>
					</Paper>
				</Grid>

				<Grid item xs={12} sm={4}>
					<h1 className={classes.headings}>Backend</h1>
					<Paper className={classes.paper}>
						<a href='https://www.python.org' target='_blank' rel='noreferrer'>
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
								alt='python'
								width='70'
								height='70'
							/>
						</a>
						<a
							href='https://www.djangoproject.com/'
							target='_blank'
							rel='noreferrer'>
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg'
								alt='django'
								width='70'
								height='70'
							/>
						</a>

						<a href='https://www.mongodb.com/' target='_blank' rel='noreferrer'>
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg'
								alt='mongodb'
								width='70'
								height='70'
							/>
						</a>
						<a href='https://expressjs.com' target='_blank' rel='noreferrer'>
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg'
								alt='express'
								width='70'
								height='70'
							/>
						</a>
						<a
							href='https://www.postgresql.org'
							target='_blank'
							rel='noreferrer'>
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg'
								alt='postgresql'
								width='70'
								height='70'
							/>
						</a>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={4}>
					<h1 className={classes.headings}>Other</h1>
					<Paper className={classes.paper}>
						<a href='https://git-scm.com/' target='_blank' rel='noreferrer'>
							<img
								src='https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
								alt='git'
								width='70'
								height='70'
							/>
						</a>

						<a href='https://nodejs.org' target='_blank' rel='noreferrer'>
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg'
								alt='nodejs'
								width='70'
								height='70'
							/>
						</a>
						<a href='https://heroku.com' target='_blank' rel='noreferrer'>
							<img
								src='https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg'
								alt='heroku'
								width='70'
								height='70'
							/>
						</a>
						<a
							href='https://code.visualstudio.com/'
							target='_blank'
							rel='noreferrer'>
							<img
								src='https://raw.githubusercontent.com/AndrewChildre/devicon/master/icons/visualstudio/visualstudio-plain.svg'
								alt='vs code'
								width='70'
								height='70'
							/>
						</a>
						<a href='https://github.com/' target='_blank' rel='noreferrer'>
							<img
								src='https://raw.githubusercontent.com/AndrewChildre/devicon/master/icons/github/github-original-wordmark.svg'
								alt='vs code'
								width='70'
								height='70'
							/>
						</a>
						<a href='https://slack.com/' target='_blank' rel='noreferrer'>
							<img
								src='https://raw.githubusercontent.com/AndrewChildre/devicon/master/icons/slack/slack-original-wordmark.svg'
								alt='vs code'
								width='70'
								height='70'
							/>
						</a>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
