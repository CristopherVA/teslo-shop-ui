import React from 'react'
import NextLink from 'next/link'
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../../components/layouts'
const RegisterPage = () => {
  return (
    <AuthLayout title={'Ingresar'} >
      <Box sx={{width: 350, padding: '10px 20px'}}>
         <Grid container spacing={2}>
            <Grid xs={12} item>
               <Typography variant='h1' component='h1'>Crear Cuenta</Typography>
            </Grid>

            <Grid xs={12} item>
               <TextField label='Name' variant='filled' fullWidth />
            </Grid>


            <Grid xs={12} item>
               <TextField label='Email' variant='filled' fullWidth />
            </Grid>

            <Grid xs={12} item>
               <TextField label='Password' type='password' variant='filled' fullWidth />
            </Grid>

            <Grid xs={12} item>
               <Button color='secondary' className='circular-btn' size='large' fullWidth>Registrar</Button>
            </Grid>

            <Grid xs={12} item justifyContent='end'>
               <NextLink href='/auth/login'>
                  <Link underline='always' sx={{cursor: 'pointer'}} >
                     ¿Tienes cuentas?
                  </Link>
               </NextLink>
            </Grid>
         </Grid>
      </Box>
    </AuthLayout>
  )
}

export default RegisterPage
