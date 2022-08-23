import Head from 'next/head';
import React, { FC } from 'react'

interface Props {
   title: string;
   pageDescription: string;
   imgFullUrl?: string
}

export const ShopLayout:FC<Props> = ({ children, title, pageDescription, imgFullUrl }) => {
  return (
      <>
         <Head>
            <title>{title}</title>
            <meta name='description' content={pageDescription} />
            <meta name='og:title' content={title} />
            <meta name='og:description' content={pageDescription} />

            {imgFullUrl && ( <meta name='og:image' content={imgFullUrl} /> )}

         </Head>

         <nav>
            {/* TODO: NAVBAR */}
         </nav>

         {/* TODO: SIDEBAR */}

         <main
            style={{
               margin: '80px auto',
               maxWidth: '1440px',
               padding: '0px 30px'
            }}
         >
            {children}
         </main>

         <footer>
            {/* TODO: CUSTOM FOOTER */}
         </footer>
      </>
  )
}


