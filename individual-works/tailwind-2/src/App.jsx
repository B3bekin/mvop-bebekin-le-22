import { useState } from "react";
import Header from "./components/Header/Header";
import Undraw from "./assets/ud_projections.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <main>
        <div className="layout-container ">
          <h1 className="mb-4 pt-20 text-6xl text-center font-semibold leading-normal font-sans ">Top Quality Digital <br></br>Products To Explore </h1>
          <h2 className=" text-neutral-500 text-2xl pt-4 text-center">Get yout blood test delivered at let home colection,<br></br> our samples will be used only <br></br>by our certificeted clients</h2>
          <h3 className=" text-red-500 text-xl text-center items-center p-9">Explore</h3>
          <div className="flex flex-row justify-between">
            <div className="p-8">
              <img
                src={Undraw}
                alt="Ilustrace"
                className="max-w-lg mx-auto mb-40 content-center hover:cursor-pointer "
              />
            </div>
          </div>
          <p className="text-xs text-red-500  text-center">WHATS THE FUNCTION<br></br></p>
          <p className="text-xl text-neutral-500 mb-12 text-center"> Meet the features of our product</p>
          <div class="grid grid-cols-4 gap-4">
            <div>{
              <div className="">
                <p className="p-1 font-semibold p-2">Fast performance</p>
                <p className="text-medium bg-blue-100 p-3  rounded-xl gap-4">
                  We will make sure, your blood stayes with us. You dont have to worry.
                </p>
              </div>}
            </div>

            <div>{
              <div className="">
                <p className="p-1 font-semibold p-2">Partnership deals</p>
                <p className="text-medium bg-blue-100 p-3  rounded-xl gap-4">
                  It will be completely safe, we wont drink it, certainly no. But we cant guarantee.
                </p>
              </div>}
            </div>

            <div>{
              <div className="">
                <p className="p-1 font-semibold p-2">Pro subscription</p>
                <p className="text-medium bg-blue-100 p-3  rounded-xl gap-4">
                  That some incidnents happen here and there. Its a problem our support is working on activly.
                </p>
              </div>}
            </div>

            <div>{
              <div className="">
                <p className="p-1 font-semibold p-2">Customer support</p>
                <p className="text-medium bg-blue-100 p-3  rounded-xl gap-4">
                  Our job is to make the blood safe. We will do whatever it takes, to make that possible.
                </p>
              </div>}
            </div>

            <div className="flex flex-row mt-20 justify-between">
              <div className="">
                <img
                  src={Undraw}
                  alt="Ilustrace"
                  className="max-w-lg mx-auto  hover:cursor-pointer "
                />
                
              </div>
              <div className="">
                </div><h1 className="  text-4xl min-w-80%  font-semibold leading-normal font-sans ">Business Goals achieved</h1>
                <div class="grid grid-cols-2 ">
              <div>{
                <div className="">
                  <p className="text-medium bg-blue-100 p-3  rounded-xl ">
                    Our job is to make the blood safe. We will do whatever it takes, to make that possible.
                  </p>
                </div>}
              </div>
              <div>{
                <div className="">
                  <p className="text-medium min-w-60% bg-blue-100 p-3  rounded-xl gap-4 ">
                    Our job is to make the blood safe. We will do whatever it takes, to make that possible.
                  </p>
                </div>}
              </div>
            </div>
            </div>
            
          </div>
          {/* <h1 className="mr-0 pt-20 text-4xl min-w-80% ml-40 font-semibold leading-normal font-sans ">Business Goals achieved</h1> */}
          
        </div>
      </main>
    </div>
  );
}

export default App;
