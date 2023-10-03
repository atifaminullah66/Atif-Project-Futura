import Image from "next/image";

type Props = {
  images: string[];
};
import React from 'react'




export default function ImageComponentSingle(props: Props) {



  return (
    <>

      <div className="row">

        {props.images.map((image, index) => {
          return (
            <div key={index} className="column">
              <img
                className="demo cursor"
                src={image}

                alt="..."
              />
            </div>
          );
        })}

      </div>

    </>
  );

};

