import Head from 'next/head'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import Layout from '@/components/navbar/navbar';
const inter = Inter({ subsets: ['latin'] })



const images = [
  'foto.jpg',
  'creams.jpg',
  'headphone.jpg',
  'kelly.jpg',
  'nespek.jpg',
  'imet.jpg',
  'luis.jpg',
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  const handlePrevClick = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (

    <Layout>

      <main className='my-4 '>
        <div className='d-flex   w-100 justify-content-around'>
          <a href="/home" className='btn btn-warning    '><b>Click to go to Products Page</b></a>
          <a href="/" className='btn btn-danger '><b>Want to Contact us</b></a>
        </div>
        <div className=' d-flex justify-content-center '>
          <b className='d-flex  flex-column  align-items-lg-center      position-absolute z-1  top-50  '>
            <h1 className='display-1 '><b>Try Our Best Quality Products</b></h1>
            <h1 className='display-2 '>Rated as Best Seller  </h1>
            <h3 className='display-3 '>We Provide Quality.</h3>
          </b>
        </div>

        <div className='mt-5  position-relative '>
          <img src={`/${images[currentImageIndex]}`} alt="Home Page Image" width="100%" height={600} />
          <div style={{ position: 'absolute', top: '50%', left: '0%', zIndex: '1' }}>
            <button onClick={handlePrevClick} style={{ fontSize: '48px', backgroundColor: 'transparent', border: 'none' }}>{'<'}</button>
          </div>
          <div style={{ position: 'absolute', top: '50%', right: '0%', zIndex: '1' }}>
            <button onClick={handleNextClick} style={{ fontSize: '48px', backgroundColor: 'transparent', border: 'none' }}>{'>'}</button>
          </div>

        </div>
      </main>
    </Layout >

  )
}
