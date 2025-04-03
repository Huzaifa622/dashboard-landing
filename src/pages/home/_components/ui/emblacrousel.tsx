import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons
// } from './EmblaCarouselArrowButtons'
// import {
//   SelectedSnapDisplay,
//   useSelectedSnapDisplay
// } from './EmblaCarouselSelectedSnapDisplay'
import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from './embla-carousel-arrows-btns'
// import { SelectedSnapDisplay, useSelectedSnapDisplay } from './embla-carousel-snap'

type PropType = {
  slides: {
    id: number;
    image: string;
    title:string;
    topic:string;
}[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

//   const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
        <div className="embla__slide " ></div>
          {slides.map((s,index) => (
            
            <div className="embla__slide " key={index}>
                
              <div className="embla__slide__number p-4 px-6">
                <div className='text-sm' >Watch</div>
                <div className='text-[1rem] font-bold mb-4' >{s.title}</div>
                <div>
                    <img src={s.image} alt="image" className='w-20' />
                </div>
                <div className='text-sm' >
                    {s.topic}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} >Next</NextButton>
        </div>

        {/* <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        /> */}
      </div>
    </section>
  )
}

export default EmblaCarousel
