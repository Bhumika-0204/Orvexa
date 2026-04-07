import React from "react";
import { icons } from "../assets/icons";


function Support() {
  return (
    <>
      <section className="w-full flex justify-center pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        <div className="flex relative top-20 justify-center p-4">
          <div className="w-full max-w-fit text-center">
            <p className="mb-3 w-full">
              <span className="inline-flex w-36 h-36 rounded-full bg-[#E4D3FF] p-2 text-[#e81cff]">
                {icons.support}
              </span>
            </p>
            <h5 className="mt-6 mb-7 text-2xl font-semibold">
              Contact me for any issue or Support
            </h5>
            <ul className="text-center flex flex-col items-start space-y-4">
              <li className="flex items-center">
                <span className="w-9 h-9 rounded-full mr-4">{icons.link}</span>
                <div className="h-full text-left">
                  <h2 className="text-lg font-bold my-0">Contact No.</h2>
                  <a
                    href="tel:8865034468"
                    className="text-blue-500 text-sm hover:text-blue-400 "
                  >
                    8865034468
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-9 h-9 rounded-full mr-4">{icons.link}</span>
                <div className="h-full text-left">
                  <h2 className="text-lg font-bold my-0">Gmail</h2>
                  <a
                    href="mailto:bhumikakumari0802@gmail.com"
                    className="text-blue-500 text-sm hover:text-blue-400 "
                  >
                    bhumikakumari0802@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-9 h-9 rounded-full mr-4">{icons.link}</span>
                <div className="h-full text-left">
                  <h2 className="text-lg font-bold my-0">LinkedIn</h2>
                  <a
                    href="https://www.linkedin.com/in/bhumika-kumari-148a57319"
                    target="_blank"
                    className="text-blue-500 text-sm hover:text-blue-400 "
                  >
                    /bhumika-kumari-148a57319
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <span className="w-9 h-9 rounded-full mr-4">{icons.link}</span>
                <div className="h-full text-left">
                  <h2 className="text-lg font-bold my-0">Discord</h2>
                  <a
                    href="https://discord.com/channels/@me"
                    target="_blank"
                    className="text-blue-500 text-sm hover:text-blue-400 "
                  >
                    Join Discord
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Support;