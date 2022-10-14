import { ColorRing } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

const Loader = () => {
  return (
      <LoaderBox>
          <p>Please wait. Is loading...</p>
      <ColorRing
              />
    </LoaderBox>
  );
};

export default Loader;


//strokeColor="#00b4ff"
//        strokeWidth="5"
//        animationDuration="0.75"
 //       width="96"
 //       visible={true}