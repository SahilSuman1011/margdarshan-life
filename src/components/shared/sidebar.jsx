"use client"
import logo from "@/public/logo.svg"

import {
  Bolt,
  House,
  MessageCircleQuestion,
  MessagesSquare,
  Search,
  Sun,
  Video,
  WandSparkles,
} from "lucide-react"
import CustomSwitch from "./custom-switch"
import { ThemeContext } from "@/context/theme"
import Image from "next/image"
import { useContext } from "react"

export default function Sidebar() {
  const { isLightTheme, updateTheme } = useContext(ThemeContext)
  const textColor = isLightTheme ? "text-black" : "text-white"
  const selectedTextColor = "text-white"
  const selectedIconColor = "text-white"
  const iconColor = isLightTheme ? "black" : "#a0a8ff"

  return (
    <div
      id="sidebar"
      className={
        (isLightTheme ? "bg-[#F7F8FC]" : "bg-[#09090a]") +
        " min-w-[250px] p-5 h-[100vh] flex flex-col border-white/20 border-r-[1px] shadow-black/20 shadow-lg stroke-white stroke-2"
      }
    >
      <div className="flex items-center gap-3">
        <Image src={logo} alt="logo" width={40} height={40} />
        <div className="flex flex-col">
          <span className={`${textColor} text-lg font-bold`}>Margdarshan</span>
          <span className={`${textColor} text-xs font-medium`}>
            "Connect. Learn. Thrive."
          </span>
        </div>
      </div>

      <div className="flex flex-col h-full justify-between">
        <div className="mt-12 flex flex-col gap-7">
          <span className={`${textColor} font-medium text-sm`}>MENU</span>
          <div
            className={`${textColor} w-full flex flex-col ml-5 gap-2 text-sm`}
          >
            <div
              className={`flex w-[90%] h-[50px] p-3 rounded-2xl items-center gap-3 ${selectedIconColor} bg-[#4956F4] `}
            >
              <House color={selectedIconColor} />
              <span>Feed</span>
            </div>
            <div className="flex w-[90%] h-[50px] p-3 rounded-xl items-center gap-3 ">
              <Search color={iconColor} />
              <span>Search</span>
            </div>
            <div className="flex w-[90%] h-[50px] p-3 rounded-xl items-center gap-3 ">
              <WandSparkles color={iconColor} />
              <span>Mentors</span>
            </div>
            <div className="flex w-[90%] h-[50px] p-3 rounded-xl items-center gap-3 ">
              <Video color={iconColor} />
              <span>Sessions</span>
            </div>
            <div className="flex w-[90%] h-[50px] p-3 rounded-xl items-center gap-3 ">
              <MessagesSquare color={iconColor} />
              <span>Inbox</span>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <span className={`${textColor} font-medium text-sm`}>TOOLS</span>
            <div
              className={`${textColor}  w-full flex flex-col ml-5 gap-2 text-sm`}
            >
              <div className="flex w-[90%] h-[50px] p-3 rounded-xl items-center gap-3 ">
                <Bolt color={iconColor} />
                <span>Settings</span>
              </div>
              <div className="flex w-[90%] h-[50px] p-3 rounded-xl items-center gap-3 ">
                <MessageCircleQuestion color={iconColor} />
                <span>Help</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`flex items-center gap-3 ${textColor} `}>
          <Sun color={iconColor} />
          <span className="text-sm">Light Mode</span>
          <CustomSwitch isLightTheme={isLightTheme} updateTheme={updateTheme} />
        </div>
      </div>
    </div>
  )
}
