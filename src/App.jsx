import { useState } from 'react';
import Menu from "./components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Home from './pages/Home';
import books from "./data/books.json";
/*fixed ml-[18%] z-2 sm:w-[82%] ml-[0%] md:fixed ml-[18%] z-2 flex bg-red-500 w-[82%] h-full rounded-l-[25px] overflow-auto`*/

function App() {
  return (
    <div className="flex min-h-screen bg-red-500">
      <div className="hidden fixed h-full w-1/6 bg-stone-500 md:block">Navegador</div>
      <div className="flex flex-col bg-orange-500 w-full min-h-screen md:ml-[16.6667%] h-fit md:rounded-l-3xl">
        <div className="flex flex-col-reverse bg-neutral-500 m-2 basis-1/9 md:flex-row">
          <div className="basis-1/2 md:basis-3/4 bg-zinc-500">SearchBar</div>
          <div className="basis-1/2 md:basis-1/4 bg-yellow-500">Iconos</div>
        </div>
        <div className="flex flex-col basis-8/9 bg-blue-500 m-2 min-h-screen sm:flex-row">
          <div className="flex flex-col flex-[3] bg-rose-500">
            <div className="flex-[1] bg-yellow-500">Banner #1</div>
            <div className="flex flex-col flex-[2] bg-black md:flex-row">
              <div className="flex flex-col flex-[2] bg-violet-500">
                <div className="flex flex-[1] w-full bg-white">
                  <div className="w-1/5 aspect-square bg-pink-500 m-2">1</div>
                  <div className="w-1/5 aspect-square bg-pink-500 m-2">2</div>
                  <div className="w-1/5 aspect-square bg-pink-500 m-2">3</div>
                  <div className="w-1/5 aspect-square bg-pink-500 m-2">4</div>
                </div>
                <div className="flex-[2] bg-purple-500"></div>
              </div>
              <div className="flex-[1] bg-red-500">Parte izquierda</div>
            </div>
            <div className="flex-[1] bg-white">Banner #2</div>
          </div>
          <div className="flex-[1] bg-sky-500">DERECHA</div>
        </div>
      </div>
    </div>
  );
}

/*<div className="flex h-screen bg-red-500"></div>
    {/*<div className="flex h-screen bg-red-500">
      <div className="fixed hidden bg-stone-500 md:block md:basis-1/6">Navegador</div>
      <div className="fixed flex flex-col bg-orange-500 w-full h-full md:basis-5/6 md:rounded-l-3xl">
        <div className="flex flex-col-reverse bg-neutral-500 m-2 basis-1/9 md:flex-row">
          <div className="basis-1/2 md:basis-3/4 bg-zinc-500">SearchBar</div>
          <div className="basis-1/2 md:basis-1/4 bg-yellow-500">Iconos</div>
        </div>
        <div className="basis-8/9 bg-blue-500 m-2"></div>
      </div>
    </div>
    /*<div className="flex justify-between h-full bg-gray text-[#343A3F] font-red-hat-display">
      <Menu className="fixed z-0 h-full hidden md:block"/>
      <Home className="fixed flex bg-red-500 h-full w-full md:z-10 md:w-[40%] md:ml-[18%]"/>
    </div>*/

export default App
