import React from 'react'
import './header.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
 
  paper: {
    width:'500px',
    padding: theme.spacing(1),
    textAlign: 'center',
    marginLeft: '490px',
    marginBottom: '30px',
    marginTop: '30px',
    background:'#09194D',
    color: theme.palette.text.secondary,
  },
  h1:{
color:"white",
  }
}));

export default function Header() {
    const classes = useStyles();
    return (
        
        
          <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper}> <h1 className={classes.h1}>TODO LIST ON REACT</h1></Paper>
        </Grid>
      </Grid>
           
        </div>
    )
}
