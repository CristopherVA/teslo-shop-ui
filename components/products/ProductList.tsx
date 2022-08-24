import { Grid } from '@mui/material'
import React, { FC } from 'react'
import { IProduct } from '../../interfaces'
import { ProductCard } from './ProductCard'

interface Props {
   products: IProduct[]
}

export const ProductList:FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={4}>
         {
            products.map(product => (
               <Grid item sm={4} key={product.slug}>
                  <ProductCard product={product} />
               </Grid>
            ))
         }
    </Grid>
  )
}
