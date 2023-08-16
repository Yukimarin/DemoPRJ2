import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme='dark'>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='//file.hstatic.net/1000230642/file/bts_af0ee6dd5f9f4bf4a9b7c782a93583bb_master.jpg'
          alt='First slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='//file.hstatic.net/1000230642/file/banner-1920x750_69f4a96661274a119cb07b1dad44d21a_master.jpg'
          alt='Second slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='//file.hstatic.net/1000230642/file/massline2_1539917014144d349cb5f4313a1e47a4_master.png'
          alt='Third slide'
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
