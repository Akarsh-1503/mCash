
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { HomeData } from './HomeData';
import { styled } from '@mui/material';

const Image= styled('img')(({theme})=>({
    borderRadius:22,
    margin:'1% 0% 1% 15%',
    width:'70%',
    height:280,
    [theme.breakpoints.down('md')] : {
      height:180
    }
}));


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



const Banner= () =>{
    return (
        <Carousel 
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3300}
        keyBoardControl={true}
        transitionDuration={1000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >

            {
                HomeData.map(data=>(
                    <Image src={data.url} alt="banner"/>
                ))
            }

        </Carousel>
    )
}



export default Banner;