import React from "react";
import "./Layout.module.css";
import inst_icon from "./assets/inst.png";
import tg_icon from "./assets/tg.png";
import vk_icon from "./assets/vk.png";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.gradient}>
      <div class="flex space-x-3 mx-6">
        <div class="w-screen flex flex-row items-center justify-center p-4 border-4 border-solid rounded-full">
          <div class="flex flex-row justify-center w-full space-x-10">
            <ul class="font-medium flex items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-l md:space-x-6 md:mt-0 md:border-0 dark:border-gray-700">
              <li class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <a type="button" href="/">
                  Home
                </a>
              </li>
              <li class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <a type="button" href="/todo">
                  Todo list
                </a>
              </li>
              <li class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <a type="button" href="/weather">
                  Weather
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-row justify-center space-x-10 border-4 rounded-full px-10 border-solid">
          <ul class="flex flex-row space-x-6 items-center ">
            <li class="w-8 h-8">
              <a
                href="https://instagram.com/yaroslavnlk?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
              >
                <img src={inst_icon} />
              </a>
            </li>
            <li class="w-8 h-8">
              <a href="https://t.me/hyperkern" target="_blank">
                <img src={tg_icon} />
              </a>
            </li>
            <li class="w-8 h-8">
              <a href="https://vk.com/id205097293" target="_blank">
                <img src={vk_icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
