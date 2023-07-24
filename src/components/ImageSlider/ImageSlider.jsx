import { useEffect, useState, useRef } from 'react'
import resolveImg from '@utils/imageResolve.js';
import { slidesImageConfig } from '@utils/SlidesConfig.js';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import Slider from 'react-slick';

import './image_slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images }) => {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [currentSlides, setCurrentSlides] = useState(0);
  const [sliderImageSettings] = useState({...slidesImageConfig,
    beforeChange: (oldSlide, newSlide) => setCurrentSlides(newSlide),
  });
  const sliderRef = useRef()

  useEffect( () => {
    sliderRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }, [])

  let classSlider = 'slides-container'
  if (carouselOpen) {
    classSlider += ' slides-container--open'
  } else {
    classSlider += ' slides-container--closed'
  }

  return (
      <div className={classSlider} ref={sliderRef}>
        <Slider {...sliderImageSettings} >
          {
            images.map( (image) => {
              return (
              <div key={image} >
                <div
                  className='image-container'
                  style={{  
                    'background': `url(${resolveImg(image)}) center`
                  }}
                >
                  <div className='image-slider__filter'>
                    <div>
                      <img src={resolveImg(image)} alt={image} />
                    </div>
                  </div>
                </div>
              </div>
              )
            })
          }
      </Slider>

      <div className='full-icon'
        onClick={ () => setCarouselOpen(!carouselOpen)}
      >
        {
          carouselOpen 
          ? <FullscreenExitIcon sx={{color: 'white'}}/>  
          : <FullscreenIcon sx={{color: 'white'}}/>
          }
      </div>

      <div className='count-slides'>
        <span>{(currentSlides + 1) + ' / ' + images.length}</span>
      </div>
    </div>
  )
}

export default ImageSlider;