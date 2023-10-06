import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

type Props = {
  images: string[];
};

export default function ImageComponentSingle(props: Props) {
  const images = props.images.map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });

  return (
    <ImageGallery items={images} />
  );
}
