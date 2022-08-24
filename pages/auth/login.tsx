import React from 'react'
import NextLink from 'next/link'
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../../components/layouts'

const LoginPage = () => {
  return (
    <AuthLayout title={'Ingresar'} >
      <Box sx={{width: 350, padding: '10px 20px'}}>
         <Grid container spacing={2}>
            <Grid xs={12} item>
               <Typography variant='h1' component='h1'>Iniciar Seccion</Typography>
            </Grid>

            <Grid xs={12} item>
               <TextField label='Email' variant='filled' fullWidth />
            </Grid>

            <Grid xs={12} item>
               <TextField label='Password' type='password' variant='filled' fullWidth />
            </Grid>

            <Grid xs={12} item>
               <Button color='secondary' className='circular-btn' size='large' fullWidth>Ingresar</Button>
            </Grid>

            <Grid xs={12} item justifyContent='end'>
               <NextLink href='/auth/register'>
                  <Link underline='always' sx={{cursor: 'pointer'}} >
                     ¿No tienes cuenta?
                  </Link>
               </NextLink>
            </Grid>
         </Grid>
      </Box>
    </AuthLayout>
  )
}

export default LoginPage
