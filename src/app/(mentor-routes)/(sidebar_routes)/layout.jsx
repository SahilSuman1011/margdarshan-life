import MentorSidebar from "@/components/shared/mentor_sidebar"

export default function layout({ children }) {
  return (
    <div className="h-full flex w-full">
      <MentorSidebar />
      <main className="max-h-[100vh] overflow-y-auto w-full">{children}</main>
    </div>
  )
}
