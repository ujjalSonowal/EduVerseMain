import React from "react";
//import "./home.css";

const Home = () => {
  return (
    <div>
      {/* <!-- header section  --> */}
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-row md: flex-row items-center"></div>
        <a href="#" class="flex w-40">
          <img
            src="../../../public/assets/images/logo.jpg"
            alt="logo"
            class="cursor-pointer"
          />
        </a>

        <nav class="md:ml-auto md:mr-auto md:flex md: flex-wrap md:items-center md: text-base md: justify-center hidden">
          <a href="#" class="mr-10 cursor-pointer hover: text-gray-900">
            Solutions
          </a>
          <a href="#" class="mr-10 cursor-pointer hover: text-gray-900">
            Plans & Pricing
          </a>
          <a href="#" class="mr-10 cursor-pointer hover: text-gray-900">
            Contact Sales
          </a>
          <a href="#" class="mr-10 cursor-pointer hover: text-gray-900">
            Resources
          </a>
        </nav>

        <button
          class="md: inline-flex md: items-center md: bg-white md: text-blue-600 md: border md: border-gray-300 md:py-2 md:px-4 md:mx-2 
 md: focus:outline-none md: hover:bg-white md: hover:border md: hover:border-blue-600 md: rounded md:text-base md:mt-4 md:mt-0 
 hidden"
        >
          Join a meeting
        </button>
        <button
          class="md: inline-flex md:items-center md: bg-blue-600 md: text-white md: border-0 md:py-2 md:px-4 md: focus:out line-n 
 md: hover: bg-blue-800 md: rounded md: text-base md:mt-4 md:mt-0 hidden"
        >
          Start a meeting
        </button>
      </header>

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex md:px-16 px-5 md:py-24 py-12 md:flex-row flex-col items-center">
          <div
            class="1g: flex-grow md:w-1/2 md:pr-24 md:pr-16 flex flex-col md: items-start text-left mb-16 md:mb-0 items-center 
text-center"
          >
            <h1 class="md: title-font md:text-4xl text-2xl mb-10 font-medium text-gray-900 w-3/4">
              Premium video meetings for everyone.
            </h1>
            <p class="mb-8 leading-relaxed w-[90%] md:text-lg text-normal text-gray-600 font-normal">
              We re-engineered the service we built for secure, high-quality
              business meetings, EduVerse, to make it available for all, on any
              device.
            </p>

            <div class="flex md: flex-row md: justify-center items-center flex-col">
              <button
                class="md: inline-flex text-white bg-blue-600 border-0 py-2 px-6 md:mb-0 mb-4 focus:out line-none
      hover:bg-blue-800 rounded text-lg flex justify-center"
              >
                <i class="fa-solid fa-video pr-2 py-1.5"></i>
                Start a meeting
              </button>

              <input
                type="text"
                class="md:ml-2 pl-5 inline-flex font-normal placeholder:text-gray-500 bg-white border 
    border-gray-300 py-2 px-2 outline-gray-500 rounded text-lg relative"
                placeholder="Enter a meeting code"
              />

              <p class="md: ml-4 mt-2.5 text-gray-500 font-semibold cursor-pointer text-[17px]">
                Join
              </p>
            </div>

            <p class="mt-10 font-medium">
              Don't have an account?
              <span class="text-blue-500 cursor-pointer">Get Started Now</span>
            </p>
          </div>

          <div class="md:max-w-1g md:w-full md:w-1/2 w-5/6">
            <img
              src="../../../public/assets/images/image4.png"
              alt="first image"
              class="object-cover object-center rounded"
            />
          </div>
        </div>
      </section>

      {/* <!-- mid section --> */}
      <hr class="border border-1 md:mx-24 mx-12" />
      <h2 class="text-center mt-10 font-semibold font-poppins">
        See what you can do with EduVerse
      </h2>
      <i class="fa-solid fa-angle-down flex items-center justify-center mb-10 mt-2 sm:text-xl"></i>

      <section class="text-gray-600 body-font">
        <div class=" container mx-auto flex md:px-16 px-5 md:pt-10 pt-12 md:py-24 py-12 md: flex-row flex-col items-center">
          <div
            class="lg: flex-grow md:w-1/2 md:-mt-12 lg:pr-24 md:pr-16 flex flex-col md: items-start md:text-left mb-16 md: mb-0 
items-center text-center"
          >
            <h1 class="title-font sm: text-4xl text-3xl mb-10 font-medium text-gray-900 w-3/4">
              Meet Safely
            </h1>
            <p class="mb-8 leading-relaxed w-[90%] md:text-lg text-normal text-gray-600 font-normal">
              EduVerse uses the same protections that Google uses to secure your
              information and safeguard your privacy. EduVerse conferences are
              incrypted in transit, and our array of safety measures are
              continuously updated for added protection.
            </p>

            <div class="flex justify-center">
              <p class="text-blue-600 font-semibold cursor-pointer">
                Learn more about security and compliance
              </p>
            </div>
          </div>
          <div class=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src="../../../public/assets/images/image6.png"
              alt="second image"
              class="object-cover object-center rounded"
            />
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex md: pt-10 pt-12 md:px-12 md: py-24 py-12 md: flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              src="../../../public/assets/images/image1.png"
              alt="third image"
              class="object-cover object-center rounded"
            />
          </div>

          <div
            class="lg: flex-grow md: w-1/2 md:-mt-12 lg:pl-24 md:pl-16 px-5 flex flex-col md: items-start md:text-left items-center 
 text-center"
          >
            <h1 class="title-font sm: text-4xl text-3xl mb-10 font-medium text-gray-800">
              Meet from anywhere
            </h1>
            <p class="mb-8 leading-relaxed w-[90%] md:text-lg text-normal text-gray-600 font-normal">
              Get the whole crew together in EduVerse, where you can present
              business proposals, collaborate on chemistry assignments, or just
              catch up face to face. <br />
              <br /> Businesses, schools, and other organizations can live
              stream meetings to 100,000 viewers within their domain.
            </p>

            <div class="flex justify-center">
              <p class="text-blue-600 font-semibold cursor-pointer">
                See plans and pricing for organization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- third section --> */}
      <section class="text-gray-600 body-font">
        <div class=" container mx-auto flex md:px-12 px-5 pt-12 md: py-24 py-12 md: flex-row flex-col items-center">
          <div
            class="lg: flex-grow md:w-1/2 md:-mt-12 lg:pr-24 md:pr-16 flex flex-col md: items-start md:text-left mb-16 md:mb-0
  items-center text-center"
          >
            <h1 class="title-font sm:text-4xl text-3xl mb-10 font-medium text-gray-900 w-3/4">
              Meet on any device
            </h1>
            <p class="mb-8 leading-relaxed w-[90%] md:text-lg text-normal text-gray-600 font-normal">
              Invited guests can join an online video conference from their
              computer using any modern web browser-no software to install. On
              mobile devices, they can join from the EduVerse app.
            </p>

            <div class="flex justify-center">
              <p class="text-blue-600 font-semibold cursor-pointer">
                Enable hybrid work with Chrome OS devices
              </p>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src="../../../public/assets/images/image2.png"
              alt="fourth image"
              class="object-cover object-center rounded"
            />
          </div>
        </div>
      </section>

      {/* <!-- fourth section --> */}
      <section class=" text-gray-600 body-font">
        <div class="container mx-auto flex md:pt-10 pt-12 md:px-12 px-5 md:py-24 py-12 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              src="C:\Users\Asus\Desktop\EduVerse\image5 (1).png"
              alt="fifth image"
              class="object-cover object-center rounded"
            />
          </div>
          <div
            class="lg: flex-grow md:w-1/2 md:-mt-44 md:pl-24 md:pl-16 flex flex-col md:items-start md: text-left items-center 
text-center"
          ></div>
          <h1 class="title-font sm:text-4xl text-3xl mb-10 font-medium text-gray-800">
            Meet clearly
          </h1>
          <p class="mb-8 leading-relaxed w-[90%] md:text-lg text-normal text-gray-600 font-normal">
            EduVerse adjusts to your network speed, ensuring high quality video
            calls wherever you are. New AI enhancements keep your calls clear
            even when your surroundings aren't.
          </p>
        </div>
      </section>

      {/* <!-- fifth section --> */}
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex md:px-16 px-5 md:pt-10 pt-12 md:py-24 py-12 md: flex-row flex-col items-center">
          <div
            class="lg:flex-grow md:w=1/2 md:-mt-12 -mt-10 lg:pr-24 md:pr-16 flex flex-col md:items:start md:text-left mb-16 md:mb-
items-center text-center"
          >
            <h1 class="title-font sm: text-4xl text-3xl mb-10 font-medium text-gray-900 w-3/4">
              Meet with everyone
            </h1>
            <p class="mb-8 leading-relaxed w-[90%] md:text-lg text-normal text-gray-600 font-normal">
              EduVerse makes meetings more accessible.
            </p>
            <div class="flex justify-center">
              <p class="text-blue-600 font-semibold cursor-pointer">
                Learn more about accessibility features
              </p>
            </div>
          </div>
          <div class="lg: max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src="../../../public/assets/images/image3.png"
              alt="sixth image"
              class=" object-cover object-center rounded"
            />
          </div>
        </div>
      </section>

      {/* <!-- footer --> */}
      <footer class="text-gray-600 body-font bg-gray=200">
        <div class="container md:px-5 py-8 pt-10 mx-auto flex items-center justify-center md: flex-row flex-col">
          <a href="#" class="flex w-40">
            <img
              src="../Home/images/logo.jpg"
              alt="footer logo"
              class="cursor-pointer"
            />
          </a>
          <nav class="md:mx-10 md:mt-0.5 mx-10 mt-4 flex flex-wrap items-center text-base justify-center">
            <a
              href="#"
              class="md:mr-5 mr-3 text-gray-500 font-medium cursor-pointer hover: text-gray-600"
            >
              About EduVerse
            </a>
            <a
              href="#"
              class="md:mr-5 mr-3 text-gray-500 font-medium cursor-pointer hover:text-gray-600"
            >
              Privacy
            </a>
            <a
              href="#"
              class="md:mr-5 mr-3 text-gray-500 font-medium cursor-pointer hover:text-gray-600"
            >
              Terms
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};
export default Home;
