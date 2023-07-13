import { useState } from 'react'
import resolveImg from '../utils/imageResolve.js';
import { slidesImageConfig } from '../utils/SlidesConfig.js';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images }) => {
  const [carouselOpen, setCarouselOpen] = useState(false);
  
  const [currentSlides, setCurrentSlides] = useState(0);
  const [sliderImageSettings] = useState({...slidesImageConfig,
    beforeChange: (oldSlide, newSlide) => setCurrentSlides(newSlide),
  });

  let classSlider = 'slides-container'
  if (carouselOpen) {
    classSlider += ' slides-container--open'
  } else {
    classSlider += ' slides-container--closed'
  }

  return (
      <div className={classSlider}>
        <Slider {...sliderImageSettings} >
          {
            images.map( (image) => {
              return (
              <div 
                key={image} 
                className='image-container'
              >
                <div
                  style={{
                    'height': '100%',
                    'background': `url(${resolveImg(image)}) center`
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    
                    <div><img src={resolveImg(image)} alt={image} /></div>
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