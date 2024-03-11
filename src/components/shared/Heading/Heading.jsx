/* eslint-disable react/prop-types */

const Heading = ({ title, subtitle, center }) => {
    return (
      <div className={center ? 'text-center m-5 md:m-10' : 'text-start'}>
        <div className='text-2xl font-bold'>{title}</div>
        <div className='font-light text-neutral-500 mt-2'>{subtitle}</div>
      </div>
    )
  }
  
  export default Heading