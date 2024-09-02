import React, { useState } from "react"
import ChartSelect from "./chart_type_select"
import AreaChart from "./area_chart"
import BarChart from "./bar_chart"
import { Skeleton } from "@mui/material"
import EarningSelect from "./earning_select"

// export default function TransactionsChart({ eachDayTransactions, isLoading }) {
export default function TransactionsChart() {
  const [earningType, setEarningType] = useState("This week")
  const [chartType, setChartType] = useState("Area")
  const eachDayTransactions = [
    {
      date: "2024-07-25T18:30:00.000Z",
      income: 0,
    },
    {
      date: "2024-07-26T18:30:00.000Z",
      income: 27513,
    },
    {
      date: "2024-07-27T18:30:00.000Z",
      income: 0,
    },
    {
      date: "2024-07-28T18:30:00.000Z",
      income: 8874,
    },
    {
      date: "2024-07-29T18:30:00.000Z",
      income: 14497,
    },
    {
      date: "2024-07-30T18:30:00.000Z",
      income: 22140,
    },
    {
      date: "2024-07-31T18:30:00.000Z",
      income: 0,
    },
  ]

  let isLoading = false

  // setTimeout(() => {
  //   isLoading = false
  // }, 3000)

  const handleChange = (event) => {
    setChartType(event.target.value)
  }

  return (
    <>
      <div className="h-[350px] p-3">
        <div className="bg-themesurfacedim rounded-3xl p-3 h-full w-full flex flex-col justify-center gap-4">
          <div className="flex w-full justify-between items-center">
            <span className="text-themeonsurface font-semibold text-lg ">
              Earnings:
            </span>
            <div className="flex">
              <EarningSelect
                earningType={earningType}
                setEarningType={setEarningType}
              />
              <ChartSelect handleChange={handleChange} chartType={chartType} />
            </div>
          </div>

          {isLoading ? (
            <Skeleton variant="rounded" animation="wave" height={214} />
          ) : (
            <div className="h-[80%]">
              {chartType == "Area" ? (
                <AreaChart eachDayTransactions={eachDayTransactions} />
              ) : (
                <BarChart eachDayTransactions={eachDayTransactions} />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
