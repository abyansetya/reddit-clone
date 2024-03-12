import Image from "next/image";
import React from "react";
import { FaRegBell } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { CiGlobe, CiBellOn } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import { IoSparklesOutline } from "react-icons/io5";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { CiVideoOn } from "react-icons/ci";
import { PiSparkleThin, PiMegaphoneLight } from "react-icons/pi";
import {
  BeakerIcon,
  HomeIcon,
  ChevronDownIcon,
} from "@heroicons/react/16/solid";
import { BsSearch } from "react-icons/bs";
import { StarIcon } from "@heroicons/react/24/outline";
import { RxHamburgerMenu } from "react-icons/rx";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

function Header() {
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 flex z-[999] bg-white px-4 py-2 shadow-sm">
      <div className="relative h-15 ite w-20 flex-shrink-0 cursor-pointer">
        <Link href="/">
          <Image
            objectFit="contain"
            src="https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_full_1-700x227.png"
            layout="fill"
            alt="logo"
          />
        </Link>
      </div>

      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search */}
      <form
        action=""
        className="flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm px-3 py-1"
      >
        <BsSearch className=" text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="search reddit"
        />
        <button type="submit" hidden />
      </form>

      <div className=" mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <PiSparkleThin className="icon" />
        <CiGlobe className="icon" />
        <CiVideoOn className="icon" />
        <hr className="h-10 border border-gray-100" />
        <BsChatDots className="icon" />
        <CiBellOn className="icon" />
        <AiOutlinePlus className="icon" />
        <PiMegaphoneLight className="icon" />
      </div>

      <div className="ml-5 flex items-center lg:hidden">
        <RxHamburgerMenu />
      </div>

      {/* Sign in & Sign out */}
      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              layout="fill"
              src="https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_Snoos_head_1-700x587.png"
              alt=""
            />
          </div>
          <div className="flex-1 text-xs">
            <p className="truncate">{session.user?.name}</p>
            <p className="text-gray-400">Sign Out</p>
          </div>
          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              layout="fill"
              src="https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_Snoos_head_1-700x587.png"
              alt=""
            />
          </div>
          <p className="text-gray-400">Sign In</p>
        </div>
      )}
    </div>
  );
}

export default Header;
