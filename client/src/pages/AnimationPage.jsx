// AI-Assisted
import Lottie from 'lottie-react';
import animationData from '../Animation - 1701150694648.json';

// Create a functional component
const AnimationPage = () => {

  // Use Lottie component inside JSX
  return (
    <div className='flex justify-center items-center'>
      <div className='animationStyledDiv'>
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default AnimationPage;
