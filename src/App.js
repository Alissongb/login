
import React from 'react'
import{Grid
  , Container, Paper, Avatar, Typography,TextField,Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import fondo from './assets/images/fondo.png'
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material'
import { useState } from 'react'
const useStyles=makeStyles(theme=>({
  root:{
       backgroundImage: `url(${fondo})`,
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       height:'100vh'

  },
  container:{
    opacity: '0.8',
    height: '70%',
    marginTop: theme.spacing(10),
    [theme.breakpoints.down(400 + theme.spacing(2)+2)]:{
      marginTop:0,
      width:'100%',
      height: '100%'
    }
  },
  div: {
    marginTop:theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center '
  },
  avatar:{
    margin:theme.spacing(1),
    backgroundColor:theme.palette.secondary.main
  },
  form: {
   width:'100%',
   marginTop: theme.spacing(1)
  },
  button:{
    margin:theme.spacing(3, 0, 2)
  }
}))

const App = () => {
  const classes= useStyles()
  return (
   <Grid container component ='main'className={classes.root}>
    <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
      <div className={classes.div}>
        <Avatar className={classes.avatar}>
         <LockOutlinedIcon/>
        </Avatar>
        <Typography component='h1' variant='h5'>Sing In</Typography>
        <form className={classes.form}>
         <TextField 
         fullWidth
         autoFocus
         color='primary'
         margin='normal'
         variant='outlined'
         label='Nickname'
         name="nickname">
        
         </TextField>
         <TextField 
         fullWidth
         type='password'
         color='primary'
         margin='normal'
         variant='outlined'
         label='pasword'
         >
        
         </TextField>
         <Button
        fullWidth
        variant='contained'
        color='secondary'
        className={classes.button}
         >
          sing in
         </Button>
        </form>
      </div>
    </Container>
    </Grid>
  )
}

export default App