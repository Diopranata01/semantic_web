import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import imgDiet from "../../assets/diet-pict-1.webp";
// import imgDiet2 from "../../assets/diet-pict-2.webp";

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* Body */}
      <div className="mx-auto flex flex-col space-y-[4.5rem] max-w-screen-xl w-full px-4 pt-36 text-black">
        {/* Banner */}
        <Banner />
        {/* Content */}
        <div className="grid grid-cols-1 gap-16">
          <div className="max-md:grid-cols-1 grid grid-cols-2 gap-4 h-[22rem]">
            <div className="max-md:row-span-3 rounded-xl d-block relative overflow-hidden">
              <img
                src={imgDiet}
                alt="banner"
                type="image/webp"
                className="object-cover w-full h-[25rem]"
              />
            </div>
            <div className="grid grid-cols-subgrid gap-4 px-7">
              <div className="col-start-2 flex text-start items-center">
                <h1 className="text-3xl">
                  <b>Dive into Our</b>
                  <br />
                  <b>Best Diet Program</b>
                </h1>
              </div>
              <div className="col-start-2 hover:row-span-3 border-black border-b-[1px] px-3 text-start flex items-center">
                <h1>Food Calories Calculation</h1>
              </div>
              <div className="col-start-2 hover:row-span-3 border-black border-b-[1px] px-3 text-start flex items-center">
                <h1>Healty Recipes</h1>
              </div>
              <div className="col-start-2 hover:row-span-3 border-black border-b-[1px] px-3 text-start flex items-center">
                <h1>Nutrition Guide</h1>
              </div>
              <div className="col-start-2 hover:row-span-3 border-black border-b-[1px] px-3 text-start flex items-center">
                <h1>Weight Tracker</h1>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 h-auto border border-white rounded-2xl bg-[#BFBD5F]">
            <div className="max-md:grid-cols-1 grid grid-cols-2 ">
              <div className="max-md:hidden grid grid-cols-subgrid gap-4 px-12 m-4 rounded-2xl">
                <div className="flex text-start items-center">
                  <h1 className="max-xl:text-4xl text-5xl leading-snug ">
                    <>
                      Sustainable Diet Solution For Our Client Future Mindset,
                      With Colaboration
                    </>
                  </h1>
                </div>
              </div>
              <div className="grid grid-cols-subgrid gap-4 px-7 m-4 rounded-2xl">
                <div className="col-start-2 flex px-2 text-start items-top mt-4">
                  <div className="flex items-center pb-1 justify-center border rounded-full w-[120px] h-9 bg-[#E2E0B6]">
                    <h1 className="text-md">
                      <b>Our Products</b>
                    </h1>
                  </div>
                </div>
                <div className="col-start-2 px-2 text-start flex items-end">
                  <h1 className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae dolorum quidem pariatur dolore, exercitationem ea placeat! Quasi, molestias eveniet neque voluptatem cumque debitis, cum porro iste perferendis, iusto sit hic?</h1>
                </div>
                <div className="col-start-2 px-2 text-start flex items-center">
                  <div className="flex items-center pb-1 justify-center rounded-[12px] w-28 h-10 bg-black">
                    <h1 className="text-white">See More</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-md:grid-cols-1 grid grid-cols-2 ">
              <div className="max-md:hidden grid grid-cols-subgrid gap-4 px-12 m-4 rounded-2xl">
                <div className="flex text-start items-center border border-black">
                  <img
                      src={imgDiet}
                      alt="banner"
                      type="image/webp"
                      className="object-cover w-full h-[25rem]"
                  />  
                </div>
              </div>
              <div className="grid grid-cols-subgrid gap-4 px-7 m-4 rounded-2xl">
                <div className="col-start-2 flex px-2 text-start items-top mt-4">
                  <div className="flex items-center pb-1 justify-center border rounded-full w-[120px] h-9 bg-[#E2E0B6]">
                    <h1 className="text-md">
                      <b>Our Products</b>
                    </h1>
                  </div>
                </div>
                <div className="col-start-2 px-2 text-start flex items-end">
                  <h1 className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae dolorum quidem pariatur dolore, exercitationem ea placeat! Quasi, molestias eveniet neque voluptatem cumque debitis, cum porro iste perferendis, iusto sit hic?</h1>
                </div>
                <div className="col-start-2 px-2 text-start flex items-center">
                  <div className="flex items-center pb-1 justify-center rounded-[12px] w-28 h-10 bg-black">
                    <h1 className="text-white">See More</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="rounded-xl d-block relative overflow-hidden max-h-100">
              <img
                src={imgDiet2}
                alt="banner"
                type="image/webp"
                className="object-cover w-full h-[25rem] pb-[3rem]"
              />
            </div> */}
          </div>
        </div>
        <h1>Halo</h1>
      </div>
    </>
  );
};

export default Layout;
