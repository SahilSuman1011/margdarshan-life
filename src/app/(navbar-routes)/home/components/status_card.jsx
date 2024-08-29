export default function StatCard({
  icon,
  title,
  value,
  titleColor,
  bgColor = "bg-white",
}) {
  return (
    <div
      className={`${bgColor} w-[270px] rounded-3xl shadow-lg shadow-gray-300 p-6 flex flex-col items-center justify-center`}
    >
      <div className="text-4xl mb-4 bg-gray-100 p-3 rounded-xl">{icon}</div>
      <h3 className={` ${titleColor} text-lg font-medium mb-2`}>{title}</h3>
      <p className="text-3xl font-semibold">{value}</p>
    </div>
  )
}
