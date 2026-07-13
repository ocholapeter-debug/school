import React, { useState, useEffect, useCallback } from 'react'
import './Display.css'

const Display = ({ slides = [], autoPlayInterval = 5000 }) => {
  // Default slides are used when no slides prop is provided.
  const defaultSlides = [
    {
      image: 'https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/465901915_27953022110963017_3301131231725963937_n.jpg?stp=dst-jpg_tt6&cstp=mx960x540&ctp=s960x540&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=EHIwqoEGkowQ7kNvwHvDWNe&_nc_oc=AdqQrM6X1lQUUXBdlsWz5wI6m4OZl47aKYBRhSZ8XU8Av2dyrUc3vLGWSYVGCasCD88&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=4ivqX582f39r8cTNWtQNgw&_nc_ss=7b2a8&oh=00_AQDQANwSUzrkkln6O476NPQaRLP7WOs5MnYJnFxERExW_w&oe=6A5ADED3',
      caption: {
        title: 'school bus',
        description: 'Bus which transports students',
      },
    },
    {
      image: 'https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/463887573_27680100788255152_1496276649186179936_n.jpg?stp=dst-jpg_tt6&cstp=mx960x320&ctp=s960x320&_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=9G94XLRtcakQ7kNvwEu7LVQ&_nc_oc=Adr7cGLa_RN2urT_CEjzJr7bdF5iyoaAMHu_Je1C7LFWQarEAF0YLYGbUoLO2884Ffo&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=rV5_bzJARlcIcxebhu_wYA&_nc_ss=7b2a8&oh=00_AQCPH5Mz6ld1DXUgS8K7dlPgyzlC-Ye9db9CCYqhwW4j0A&oe=6A5AF8FF',

      caption: {
        title: 'main building',
        description: 'class room for the students',
      },
    },
    {
      image: 'https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/463482086_27680100768255154_4102966133368624537_n.jpg?stp=dst-jpg_tt6&cstp=mx960x320&ctp=s960x320&_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=LFKzBfq5hmwQ7kNvwELJdjr&_nc_oc=Adqt7Km2bDqPSBmhy7hhd-wc-cYHOX1j1NvBd_-RPcLsr4V8_vIn8Jx-FROeNdNGXzM&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=ThfhS5sxyRkjjepFy7NcoA&_nc_ss=7b2a8&oh=00_AQDKBIKycb_VlHgUlXEeFr20lppLHU2Uw6XUs3W3qDoZwg&oe=6A5AE0A8',

      caption: {
        title: 'sideview',
        description: 'class room side view for the students',
      },
    },
     {
      image: 'https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/465372919_27896126536652575_8201871790723763414_n.jpg?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rwFb8-1dbqkQ7kNvwEwlUqe&_nc_oc=AdrEikFWlrurocLPADrgp5oCLTCZhPhuCtZkkuSv9tfjMnVx690fCzEFPyOZOi_TXvA&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=Ye1YmC9_AJVR562lztnO3w&_nc_ss=7b2a8&oh=00_AQD3_BT6rfbpBZ5h5InyNvF3h43hUpdn7rTiRusn1nzbxQ&oe=6A5ADD83',
      
      caption: {
        title: 'O-level',
        description: 'O-level students during UNEB',
      },
    },
     {
      image: 'https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/465408551_27885241487741080_1374096667004108623_n.jpg?stp=dst-jpg_tt6&cstp=mx640x640&ctp=s640x640&_nc_cat=109&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=YIcLLSLjDkgQ7kNvwHQiGRn&_nc_oc=AdospFjO5eHBkEPJnYVVgjkCuJeEsNaT8e6JfoFFNHM6ZFnEPo6fL5eRX1JQ0lsa-Fk&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=4qLZk2nlfV8kF8a79Jx80Q&_nc_ss=7b2a8&oh=00_AQDrHB1J88eUhBx3DdGAQP6gYR0nlLqjRy0YS1-SYUqBnQ&oe=6A5AD7D1',
      
      caption: {
        title: 'sport',
        description: 'sport teams',
      },
    },
     {
      image: ' https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/455034118_26764710579794182_6640939120061285747_n.jpg?stp=dst-jpg_tt6&cstp=mx720x469&ctp=s720x469&_nc_cat=101&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=oPx7-LoJ9tQQ7kNvwEgHYMd&_nc_oc=AdrHftkcTmNIAk1IM6PY6_XK-BH0lj3pdHAR_TGHJkgLrPRD427N8cXdVJVDKMJhbX8&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=JWRgRxB4m2MY7TfxDZpEQQ&_nc_ss=7b2a8&oh=00_AQAX3JFMRakr_Yp3A7adnNRHy1aX_oAySoCCm_92fzJLvA&oe=6A5AD50E',
      
      caption: {
        title: 'A-level',
        description: 'A -levelstudents',
      },
    },
  ]

  // If the caller passes slides, use those; otherwise fallback to defaults.
  const effectiveSlides = slides && slides.length > 0 ? slides : defaultSlides

  // Track the currently visible slide index.
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = effectiveSlides.length

  // Advance to the next slide, wrapping back to the first slide.
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }, [totalSlides])

  // Go to the previous slide, wrapping to the last slide when needed.
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  // Change the current slide directly when a dot is clicked.
  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Always auto-play the carousel in a continuous loop.
  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval)
    return () => clearInterval(interval)
  }, [nextSlide, autoPlayInterval])

  if (totalSlides === 0) {
    return <div className="carousel-empty">No slides available</div>
  }

  return (
    <div className="display">
      {/* Slide container that holds all slides in one stack. */}
      <div className="display-slides">
        {effectiveSlides.map((slide, index) => (
          <div
            key={index}
            className={`display-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
          >
            {/* Image for the slide */}
            <img src={slide.image} alt={(slide.caption && slide.caption.title) || `Slide ${index + 1}`} />
            {slide.caption && (
              <div className="display-caption">
                <h3>{slide.caption.title}</h3>
                <p>{slide.caption.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation arrows. */}
      <button className="display-arrow prev" onClick={prevSlide} aria-label="Previous slide">
        &#10094;
      </button>
      <button className="display-arrow next" onClick={nextSlide} aria-label="Next slide">
        &#10095;
      </button>

      {/* Slide indicator dots. */}
      <div className="display-dots">
        {effectiveSlides.map((_, index) => (
          <button
            key={index}
            className={`display-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Display
