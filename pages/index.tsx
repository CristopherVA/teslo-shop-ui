import { Typography } from '@mui/material'
import type { NextPage } from 'next'

import { ShopLayout } from '../components/layouts/'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <ShopLayout  title={'Teslo - Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aqui'}>
      <Typography variant='h1' component='h1' sx={{ mb: 1 }}>Tienda</Typography>
      <Typography variant='h2' component='h3' sx={{ mb: 1 }}>Todos los productos</Typography>
    </ShopLayout>
  )
}

export default Home
