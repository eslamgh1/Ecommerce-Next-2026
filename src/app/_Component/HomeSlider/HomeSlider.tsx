import MySwiper from "../MySwiper/page";
//slider images
import img1 from "@images/slider-image-1.jpeg";
import img2 from "@images/slider-image-2.jpeg";
import img3 from "@images/slider-image-3.jpeg";
//blog images
import blog1 from "@images/blog-img-1.jpeg";
import blog2 from "@images/blog-img-2.jpeg";


export default function HomeSlider(){
  return (
    <>
         <div className="flex pt-15">

          <MySwiper imageList={[img1.src, img2.src, img3.src]} spaceBetween={10} slidesPerView={1} /> 

        <div className=" w-1/4">
          <img className="h-[200px]" src={blog1.src} alt="blog1" />
          <img className="h-[200px]" src={blog2.src} alt="blog2" />
        </div>

      </div> 
    </>
  )
}