import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

type Props = {
  src: string,
  alt: string
};

export default function ImageComponentSingle(props: Props) {


  return (
    <img src={props.src} alt={props.alt} width={400} height={400} />
  );
}
