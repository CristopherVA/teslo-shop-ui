import { Grid, Typography } from '@mui/material'
import React, { FC } from 'react'


interface Props {

}

export const OrderSummary:FC<Props> = () => {
  return (
      <Grid container>
         <Grid item xs={6}>
            <Typography>No. Order</Typography>
         </Grid>
         <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>3 items</Typography>
         </Grid>

         <Grid item xs={6}>
            <Typography>SubTotal</Typography>
         </Grid>
         <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{`$${155.36}`}</Typography>
         </Grid>

         <Grid item xs={6}>
            <Typography>Impuestos</Typography>
         </Grid>
         <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{`$${35.34}`}</Typography>
         </Grid>

         <Grid item xs={6} sx={{mt:2}}>
            <Typography>Total</Typography>
         </Grid>
         <Grid item xs={6} sx={{mt:2}} display='flex' justifyContent='end'>
            <Typography variant='subtitle1'>{`$${186.34}`}</Typography>
         </Grid>
      </Grid>
  )
}
