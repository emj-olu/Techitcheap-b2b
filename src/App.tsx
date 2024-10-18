import { Header } from "./components/Header";
import HeroImg from "./assets/img/Subtract.png";
import Rings from "./assets/svgs/audi.svg";
import { Flower } from "./assets/icons/flower";
import {
  Brand,
  Check,
  Consultation,
  DollarSack,
  ProductDesign,
  ProductDev,
} from "./assets/icons";
import { PiAsteriskLight } from "react-icons/pi";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="font-mont sm:px-10 px-5">
        <Header />

        <div className="flex flex-col sm:gap-5 gap-2 sm:mt-10 mt-5 lg:w-[899px] w-auto text-center items-center mx-auto">
          <h2 className="md:text-4xl text-2xl font-bold md:leading-[55px] leading-[40px]">
            We are a creative digital company. We help you Transform Your Vision
            into a Powerful <br />
            <span className="text-primaryColor">Brand</span>
          </h2>
          <p className="sm:text-base text-sm">
            Together, our team crafts branding brilliance that makes your
            business <br />
            unforgettable.
          </p>
        </div>

        <div className="w-full sm:mt-10 mt-6 relative">
          <img src={HeroImg} alt="" className="w-full hero-img" />

          <div className="w-[400px] h-[200px] rocket-bg xl:rounded-[30px] rounded-3xl absolute top-0  right-2 p-5">
            <p className="text-2xl text-white">
              Grow your brand visibility to over
            </p>
            <h2 className="text-white font-bold text-3xl xl:mt-5 mt-1">100%</h2>
          </div>

          <div className="w-[400px] h-[200px] brain-bg xl:rounded-[30px] rounded-3xl absolute bottom-0 left-6 p-5">
            <p className="text-2xl text-white">
              Explore the Brilliance of our Team
            </p>
            <img src={Rings} alt="rings" className="xl:mt-5 mt-1" />
          </div>
        </div>
      </div>
      <div className="bg-[#DDE5FF] relative mt-24 font-mont py-10">
        <div className="absolute left-1/2 -translate-x-1/2 bg-white top-0 p-2 rounded-b-2xl">
          <span className="flex items-center sm:gap-4 gap-1 border border-primaryColor py-1 sm:px-4 px-3 rounded-full w-auto">
            <h3 className="text-primaryColor sm:text-xl text-base font-bold">
              Our Services
            </h3>
            <Flower className="sm:h-[36px] h-[25px] sm:w-[36px] w-[25px]" />
          </span>
        </div>
        <div className="space-y-8 mx-auto md:w-[700px] w-auto mt-20 px-5">
          <h2 className="text-center md:text-3xl text-2xl font-semibold">
            Solutions to your <span className="text-primaryColor">Vision </span>
            with Expertise and Creativity
          </h2>
          <p className="text-center sm:text-base text-sm">
            Elevating your establishment through intuitive designs alongside
            creating user friendly Brand identity
          </p>
        </div>

        <div className="flex lg:justify-between justify-center  sm:px-10 px-5 mt-10 gap-10 flex-wrap">
          <div className="flex justify-between lg:h-[430px] h-[400px] px-5 py-8 rounded-[35px] bg-white w-[350px] flex-col">
            <span className="sm:h-14 sm:w-14 h-12 w-12 rounded-full bg-black flex justify-center items-center">
              <ProductDesign className="sm:h-[39px] h-[30px] sm:w-[39px] w-[30px]" />
            </span>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Product Design</h3>
              <p className="">
                Crafting intuitive and visually compelling designs that meets
                your business requirements
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-1">
                  <PiAsteriskLight />
                  <span>User Interface Design</span>
                </p>
                <p className="flex items-center gap-1">
                  <PiAsteriskLight />
                  User Experience Design
                </p>
                <p className="flex items-center gap-1">
                  <PiAsteriskLight />
                  Mobile Application Design
                </p>
                <p className="flex items-center gap-1">
                  <PiAsteriskLight />
                  Website Design
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between lg:h-[430px] h-[400px] px-5 py-8 rounded-[35px] bg-white w-[350px] flex-col">
            <span className="sm:h-14 sm:w-14 h-12 w-12 rounded-full bg-[#04A658] flex justify-center items-center">
              <ProductDev className="sm:h-[39px] h-[30px] sm:w-[39px] w-[30px]" />
            </span>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Product Development</h3>
              <p className="">
                Rapidly transforming designs and concepts to product that meet
                users needs.
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-1">
                  <PiAsteriskLight />
                  <span>Mobile Application Development</span>
                </p>
                <p className="flex items-center gap-1">
                  <PiAsteriskLight />
                  Website Development
                </p>
                <p className="flex items-center gap-1">
                  <PiAsteriskLight />
                  And more...
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between lg:h-[430px] h-[400px] px-5 py-8 rounded-[35px] bg-white w-[350px] flex-col">
            <span className="sm:h-14 sm:w-14 h-12 w-12 rounded-full bg-[#C071FF] flex justify-center items-center">
              <Brand className="sm:h-[39px] h-[30px] sm:w-[39px] w-[30px]" />
            </span>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Brand Identity</h3>
              <p className="">
                Crafting and establishing unique designs that states your brand
                and resonate with your customers.
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-1">
                  <PiAsteriskLight />
                  <span>Logo</span>
                </p>
                <p className="flex items-center gap-1">
                  <PiAsteriskLight />
                  typeface and Typography
                </p>
                <p className="flex items-center gap-1">
                  <PiAsteriskLight />
                  Color Pyschology
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-wrap sm:px-10 px-5 mt-10 lg:gap-[20rem] gap-10">
          <div className="flex justify-between lg:h-[430px] h-[400px] px-5 py-8 rounded-[35px] bg-white w-[350px] flex-col">
            <span className="sm:h-14 sm:w-14 h-12 w-12 rounded-full bg-[#FFBE5B] flex justify-center items-center">
              <Consultation className="sm:h-[39px] h-[30px] sm:w-[39px] w-[30px]" />
            </span>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Consultation</h3>
              <p className="">
                Guiding projects with strategic insights and comprehensive
                visual expertise.
              </p>
            </div>
          </div>

          <div className="flex justify-between lg:h-[430px] h-[400px] px-5 py-8 rounded-[35px] bg-white w-[350px] flex-col">
            <span className="sm:h-14 sm:w-14 h-12 w-12 rounded-full bg-[#2454FF] flex justify-center items-center">
              <ProductDesign className="sm:h-[39px] h-[30px] sm:w-[39px] w-[30px]" />
            </span>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Brand Implementation</h3>
              <p className="">
                Crafting intuitive and visually compelling designs that meets
                your business requirements
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-1">
                  <PiAsteriskLight />
                  <span>Website Maintenance</span>
                </p>
                <p className="flex items-center gap-1">
                  <PiAsteriskLight />
                  Mobile Application Maintenance
                </p>
                <p className="flex items-center gap-1">
                  <PiAsteriskLight />
                  Social Media Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:px-10 px-5 py-10 relative sm:h-screen mt-20 flex text-white flex-col sm:gap-[20rem] gap-[10rem] font-mont about">
     
        <div className="absolute right-24 bg-white top-0 p-2 rounded-b-2xl">
          <span className="flex items-center gap-4 border border-primaryColor py-1 px-4 rounded-full">
            <h3 className="text-primaryColor sm:text-xl text-base font-bold">
              About Us
            </h3>
            <Flower className="sm:h-[36px] h-[25px] sm:w-[36px] w-[25px]" />
          </span>
        </div>
    
        <div className="text-white mt-20 flex flex-col gap-2 justify-center items-center lg:w-[950px] w-auto text-center mx-auto">
          <h2 className="text-center md:text-3xl text-2xl font-semibold">
            About Techitcheap
          </h2>
          <p className="font-light">
            At TechItCheap we revolutionize branding and brand identity by
            blending the essence of human connection, problem solution and
            optimum user and client experience.
          </p>
          <p className="font-light">
            We do this by exploring the expertise and brilliance of our
            professionals, conducting adequate user research to help build a
            proper and efficient Products for our clients.
          </p>
        </div>
        <div className="flex gap-10 justify-center items-center flex-wrap backdrop-blur-md">
          <div className="space-y-5 sm:w-[500px] w-auto text-center">
            <h2 className="font-semibold text-3xl">Our Misson</h2>
            <p className="font-light">
              At TechICheap our mission is to help businesses grow by providing
              affordable and easy-to-use digital solution/products. We focus on
              delivering fast, secure and reliable services that meets the
              unique needs of our clients.
            </p>
          </div>
          <div className="space-y-5 sm:w-[500px] w-auto text-center">
            <h2 className="font-semibold text-3xl">Our Vision</h2>
            <p className="font-light">
              Our Vision is to be the go-to-partner for businesses seeking
              simple and effective digital products and solutions. We strive to
              make technology solve user and customer problems, enabling
              businesses to succeed and connect to their customers.
            </p>
          </div>
        </div>
      </div>
      <div className="sm:px-10 px-5 py-20 relative mt-20 bg-[#DDE5FF] font-mont">
        <div className="absolute left-24 bg-white top-0 p-2 rounded-b-2xl">
          <span className="flex items-center gap-4 border border-primaryColor py-1 px-4 rounded-full">
            <h3 className="text-primaryColor sm:text-xl text-base font-bold">
              Pricing
            </h3>
            <DollarSack className="sm:h-[36px] h-[25px] sm:w-[36px] w-[25px]" />
          </span>
        </div>
        <div className="space-y-4">
          <h2 className="md:text-3xl text-2xl font-semibold">
            Explore Our Pricing and Payment Options, Plans
          </h2>
          <p className="sm:text-base text-sm">
            Elevating your establishment through intuitive designs alongside
            creating user friendly Brand identity
          </p>
        </div>

        <div className="min-h-screen flex gap-10 justify-center py-10 flex-wrap">
          <div className="px-5 py-7 rounded-[30px] w-[400px] sm:h-[530px] h-[500px] bg-white flex flex-col justify-between">
            <div className="bg-black p-5 rounded-2xl h-[200px] flex flex-col justify-between w-full">
              <div>
                <span className="bg-[#9747FF] text-base py-1 px-2 text-white rounded font-light">
                  Premium Pack
                </span>
              </div>

              <div className="text-white flex items-end">
                <p className="font-light sm:text-base text-sm">
                  This package is ideal for jsvsgcsbuubb busb bhx hxh
                </p>
                <div className="flex flex-col">
                  <span className="sm:text-base text-sm sm:self-start self-end">
                    from:
                  </span>
                  <span className="py-1 px-2 rounded-sm text-[#2454FF] bg-[#ECF1FF] text-sm">
                    $2000
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="flex items-center gap-1">
                <PiAsteriskLight />
                <span>User Interface Design</span>
              </p>
              <p className="flex items-center gap-1">
                <PiAsteriskLight />
                User Experience Design
              </p>
              <p className="flex items-center gap-1">
                <PiAsteriskLight />
                Mobile Application Design
              </p>
              <p className="flex items-center gap-1">
                <PiAsteriskLight />
                Website Design
              </p>
              <p className="flex items-center gap-1">
                <PiAsteriskLight />
                Consultation
              </p>
              <p className="flex items-center gap-1">
                <PiAsteriskLight />
                Brand Identity Design
              </p>
            </div>
          </div>
          <div className="px-5 py-7 rounded-[30px] w-[400px] sm:h-[530px] h-[500px]  bg-white flex flex-col justify-between self-end">
            <div className="bg-black p-5 rounded-2xl h-[200px] flex flex-col justify-between w-full">
              <div>
                <span className="bg-[#04A658] text-base py-1 px-2 text-white rounded font-light">
                  Professional Pack
                </span>
              </div>

              <div className="text-white flex items-end">
                <p className="font-light sm:text-base text-sm">
                  This package is ideal and recommended for established
                  enterprises.
                </p>
                <div className="flex flex-col">
                  <span className="sm:text-base text-sm sm:self-start self-end">
                    from:
                  </span>
                  <span className="py-1 px-2 rounded-sm text-[#2454FF] bg-[#ECF1FF] text-sm">
                    $2000
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="flex items-center gap-1">
                <PiAsteriskLight />
                <span>User Interface Design</span>
              </p>
              <p className="flex items-center gap-1">
                <PiAsteriskLight />
                User Experience Design
              </p>
              <p className="flex items-center gap-1">
                <PiAsteriskLight />
                Mobile Application Design
              </p>
              <p className="flex items-center gap-1">
                <PiAsteriskLight />
                Website Design
              </p>
              <p className="flex items-center gap-1">
                <PiAsteriskLight />
                Brand Identity Design
              </p>
            </div>
          </div>
          <div className="px-5 py-7 rounded-[30px] w-[400px] sm:h-[530px] h-[500px]  bg-white flex flex-col justify-between">
            <div className="bg-black p-5 rounded-2xl h-[200px] flex flex-col justify-between w-full">
              <div>
                <span className="bg-[#2454FF] text-base py-1 px-2 text-white rounded font-light">
                  Starters Pack
                </span>
              </div>

              <div className="text-white flex items-end">
                <p className="font-light sm:text-base text-sm">
                  This package is the most ideal for new businesses and
                  Startups.
                </p>
                <div className="flex flex-col">
                  <span className="sm:text-base text-sm sm:self-start self-end">
                    from:
                  </span>
                  <span className="py-1 px-2 rounded-sm text-[#2454FF] bg-[#ECF1FF] text-sm">
                    $2000
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="flex items-center gap-1">
                <PiAsteriskLight />
                <span>User Interface Design</span>
              </p>
              <p className="flex items-center gap-1">
                <PiAsteriskLight />
                User Experience Design
              </p>
              <p className="flex items-center gap-1">
                <PiAsteriskLight />
                Mobile Application Design
              </p>
              <p className="flex items-center gap-1">
                <PiAsteriskLight />
                Website Design
              </p>
              <p className="flex items-center gap-1">
                <PiAsteriskLight />
                Brand Identity Design
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 lg:flex hidden flex-col gap-10 items-center">
          <h2 className="md:text-3xl text-2xl font-semibold">
            All plans include;
          </h2>
          <div className="grid grid-cols-2 gap-5 w-[900px] ">
            <div className="flex gap-1 bg-white rounded-2xl p-3 items-center">
              <Check />
              <p className="text-sm">
                Thoroughly conducted research on target audience demography
              </p>
            </div>
            <div className="flex gap-1 bg-white rounded-2xl p-3 items-center">
              <Check />
              <p className="text-sm">
                Thoroughly conducted research on target audience demography
              </p>
            </div>
            <div className="flex gap-1 bg-white rounded-2xl p-3 items-center">
              <Check />
              <p className="text-sm">
                Thoroughly conducted research on target audience demography
              </p>
            </div>
            <div className="flex gap-1 bg-white rounded-2xl p-3 items-center">
              <Check />
              <p className="text-sm">
                Thoroughly conducted research on target audience demography
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:px-10 px-5 py-20 relative my-20 font-mont challenge h-[40rem] text-white">
        <div className="absolute left-1/2 -translate-x-1/2 bg-white bottom-0 p-2  rounded-t-2xl">
          <span className="flex items-center gap-4 border border-primaryColor py-1 px-4 rounded-full">
            <h3 className="text-primaryColor sm:text-xl text-base font-bold">
              Explore more
            </h3>
          </span>
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 space-y-5 text-center w-full">
          <h2 className="md:text-3xl text-2xl font-bold">
            Let’s solve your biggest challenges together
          </h2>
          <p className="sm:text-base text-sm font-medium">
            Find everything you need for perfect brand <br />
            identity. Book a free consultation today!
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
