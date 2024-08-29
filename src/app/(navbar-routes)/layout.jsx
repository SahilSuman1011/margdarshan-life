import Sidebar from "@/components/shared/sidebar"
import React from "react"

export default function layout({ children }) {
  return (
    <div className="h-full flex w-full">
      <Sidebar />

      <main className="h-[100vh] overflow-y-scroll">{children}</main>
    </div>
  )
}
