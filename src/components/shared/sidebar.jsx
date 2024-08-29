"use client"
import logo from "@/public/logo.svg"
import { usePathname } from "next/navigation"
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
import Link from "next/link"

export default function Sidebar() {
  const { isLightTheme, updateTheme } = useContext(ThemeContext)
  const textColor = isLightTheme ? "text-black" : "text-white"
  const selectedTextColor = "text-white"
  const selectedIconColor = "text-white"
  const iconColor = isLightTheme ? "black" : "#a0a8ff"

  const pathname = usePathname()

  const selectedStyles = ""

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
            <Link
              href="/home"
              className={
                pathname === "/home"
                  ? `${selectedIconColor} bg-[#4956F4] flex w-[90%] h-[50px] p-3 rounded-2xl items-center gap-3`
                  : "flex w-[90%] h-[50px] p-3 rounded-2xl items-center gap-3"
              }
            >
              <House
                color={pathname === "/home" ? selectedIconColor : iconColor}
              />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/search"
              className={
                pathname === "/search"
                  ? `${selectedIconColor} bg-[#4956F4] flex w-[90%] h-[50px] p-3 rounded-2xl items-center gap-3`
                  : "flex w-[90%] h-[50px] p-3 rounded-2xl items-center gap-3"
              }
            >
              <Search
                color={pathname === "/search" ? selectedIconColor : iconColor}
              />
              <span>Search</span>
            </Link>
            <Link
              href="/mentors"
              className={
                pathname === "/mentors"
                  ? `${selectedIconColor} bg-[#4956F4] flex w-[90%] h-[50px] p-3 rounded-2xl items-center gap-3`
                  : "flex w-[90%] h-[50px] p-3 rounded-2xl items-center gap-3"
              }
            >
              <WandSparkles
                color={pathname === "/mentors" ? selectedIconColor : iconColor}
              />
              <span>Mentors</span>
            </Link>
            <Link
              href="/sessions"
              className={
                pathname === "/sessions"
                  ? `${selectedIconColor} bg-[#4956F4] flex w-[90%] h-[50px] p-3 rounded-2xl items-center gap-3`
                  : "flex w-[90%] h-[50px] p-3 rounded-2xl items-center gap-3"
              }
            >
              <Video
                color={pathname === "/sessions" ? selectedIconColor : iconColor}
              />
              <span>Sessions</span>
            </Link>
            <Link
              href="/inbox"
              className={
                pathname === "/inbox"
                  ? `${selectedIconColor} bg-[#4956F4] flex w-[90%] h-[50px] p-3 rounded-2xl items-center gap-3`
                  : "flex w-[90%] h-[50px] p-3 rounded-2xl items-center gap-3"
              }
            >
              <MessagesSquare
                color={pathname === "/inbox" ? selectedIconColor : iconColor}
              />
              <span>Inbox</span>
            </Link>
          </div>
          <div className="flex flex-col gap-7">
            <span className={`${textColor} font-medium text-sm`}>TOOLS</span>
            <div
              className={`${textColor} w-full flex flex-col ml-5 gap-2 text-sm`}
            >
              <Link
                href="/settings"
                className={
                  pathname === "/settings"
                    ? `${selectedIconColor} bg-[#4956F4] flex w-[90%] h-[50px] p-3 rounded-2xl items-center gap-3`
                    : "flex w-[90%] h-[50px] p-3 rounded-2xl items-center gap-3"
                }
              >
                <Bolt
                  color={
                    pathname === "/settings" ? selectedIconColor : iconColor
                  }
                />
                <span>Settings</span>
              </Link>
              <Link
                href="/help"
                className={
                  pathname === "/help"
                    ? `${selectedIconColor} bg-[#4956F4] flex w-[90%] h-[50px] p-3 rounded-2xl items-center gap-3`
                    : "flex w-[90%] h-[50px] p-3 rounded-2xl items-center gap-3"
                }
              >
                <MessageCircleQuestion
                  color={pathname === "/help" ? selectedIconColor : iconColor}
                />
                <span>Help</span>
              </Link>
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
