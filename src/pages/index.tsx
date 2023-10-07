import Head from 'next/head'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import Layout from '@/components/navbar/navbar';
const inter = Inter({ subsets: ['latin'] })



const images = [
  'foto.jpg',
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

      {/* <main className='m-4 w-100 '> */}

      <div className=' container-fluid px-5'>
        <div className='row d-flex  justify-content-between '>
          <div className='mt-5  position-relative  col-lg-6 '>
            <img src={`/${images[currentImageIndex]}`} alt="Home Page Image" className='w-100' />

            {/* Code for the clicc buttons */}
            <div style={{ position: 'absolute', top: '50%', left: '0%', zIndex: '1' }}>
              <button onClick={handlePrevClick} style={{ fontSize: '48px', backgroundColor: 'transparent', border: 'none' }}>{'<'}</button>
            </div>
            <div style={{ position: 'absolute', top: '50%', right: '0%', zIndex: '1' }}>
              <button onClick={handleNextClick} style={{ fontSize: '48px', backgroundColor: 'transparent', border: 'none' }}>{'>'}</button>
            </div>

          </div>


          {/* Code for right side */}
          <div
            className='d-flex  flex-column col-md   align-self-center '>


            {/* Right side text */}
            <div className='  text-white text-center   '>
              <h1 className='display-1  '><b  >Try Our Best Quality Products </b></h1>

            </div>


            {/* Right buttons */}
            <div className='col-md text-center   '>
              <a href="/home" className='btn btn-danger    '><b className='fs-3   '> Products Page</b></a>
            </div>
            <div className='col-md text-center  '>
              <a href="/" className='btn btn-success '><b className='fs-3 '> Contact us</b></a>
            </div>


          </div>
        </div>
      </div>

      {/* </main> */}
    </Layout >

  )
}
