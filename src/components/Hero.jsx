import React from 'react'
import mainLayer from '../assets/mainL.png'
import layer2 from '../assets/l3.svg'
import { TypeAnimation } from 'react-type-animation'


const Hero = () => {
  return (
    <div className='relative h-[92vh] overflow-hidden'>
      <div className='w-full text-gray-400 flex flex-row justify-start h-full items-center text-3xl sm:text-3xl md:text-5xl lg:text-7xl'>
        <h1 className='text-white z-30 ml-20 mr-2 md:mr-8'>Juan Pablo Salomón,</h1>
        <TypeAnimation
          sequence={[
            "Frontend Dev",
            1000,
            "Backend Dev",
            1000,
            "Full Stack Dev",
            1000,
          ]}
          wrapper='span'
          speed={50}
          repeat={Infinity}
          style={{ marginBottom: '0px' }}
          />
          <img src={layer2} alt="layer2" className='z-20 hidden md:block absolute bottom-[100px] w-full object-bottom object-cover' />
          <img src={mainLayer} alt="mainlayer" className='z-10 absolute w-full object-bottom object-cover' />
      </div>
    </div>
  )
}

export default Hero