import React, { FC } from 'react'
import { Box } from '@mui/system'
import Head from 'next/head'

interface Props{
   title: string;
   children: any;
}

export const AuthLayout:FC<Props> = ({ children, title}) => {
  return (
   <>
      <Head>

      </Head>

      <main>
         <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)'>
            {children}
         </Box>
      </main>
   </>
   )
}
