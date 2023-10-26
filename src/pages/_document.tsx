import React, { ReactNode } from 'react';

import Layout from '@/components/navbar/navbar';
import Document, { Html, Head, Main, NextScript } from 'next/document';

type LayoutProps = {
  children: ReactNode;
};

export default function CustomDocument() {
  return (
    <Html lang="en">
      <Head />
      <body className='d-flex flex-column  h-100 '>
        <Layout>
          <>
            <Main />


            <NextScript />
          </>
        </Layout>

      </body>

    </Html>
  );
}
