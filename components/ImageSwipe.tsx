'use client'
import React, {useState} from 'react'
import {getNextIndex} from '@/data/helpers'

type Content = {
  image:any,
  alt:any
}

type ImageSwipeProps = {
  content: Content[]
}

export default function ImageSwipe({content}:ImageSwipeProps) {

    const images = content.map(item => item.image);
    const alts = content.map(item => item.alt);

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    const next = getNextIndex(currentIndex, images.length)

    return (
        <div className='relative '>
            <div className='h-full w-full'>
                <button className="z-20 absolute -left-4 top-0 bottom-0 text-4xl text-neutral-300" onClick={prevSlide}>
                    &#10094;
                </button>

                <div className='relative mx-2'>
                    <div className='flex flex-col origin-center -rotate-3 shadow-xl rounded-3xl'>
                      <img className='w-full h-[200px] md:h-[450px] object-cover  rounded-t-3xl' src={images[next]}/>
                      <div className='md:h-10 bg-[--clr-base]/75 rounded-b-3xl px-5 py-2 font-semibold text-xs md:text-sm'>
                        {alts[next]}
                      </div>
                    </div>

                    {images.map((image:any, index:number) => (
                    <div key={index} className='absolute top-0 bottom-0 left-0 right-0'>
                        {index === currentIndex && 
                        <div className='flex flex-col origin-center rotate-3 shadow-xl rounded-3xl'>
                          <img className='w-full h-[200px] md:h-[450px] object-cover rounded-t-3xl' src={images[index]}/>
                          <p className='md:h-10 bg-[--clr-base] rounded-b-3xl px-5 py-2 font-semibold text-xs md:text-sm'>
                            {alts[index]}
                          </p>
                        </div>
                        }
                    </div>
                    ))}
                </div>
                
                <button className="z-20 absolute -right-4 top-0 bottom-0 text-4xl text-neutral-300" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </div>
    )
}
