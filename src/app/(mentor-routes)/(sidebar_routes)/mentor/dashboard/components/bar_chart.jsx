import React from "react"
import { Chart as ChartJS, Tooltip, Legend, defaults } from "chart.js"

import { Bar } from "react-chartjs-2"
import { CategoryScale, LinearScale, BarElement } from "chart.js"
import { format } from "date-fns"

ChartJS.register(BarElement)
ChartJS.register(LinearScale)
ChartJS.register(CategoryScale)
ChartJS.register(Tooltip)
ChartJS.register(Legend)

defaults.maintainAspectRatio = false
defaults.responsive = true

export default function BarChart({ eachDayTransactions }) {
  return (
    <div className="w-full h-full">
      <Bar
        data={{
          labels: eachDayTransactions.map((i) => format(i.date, "d LLL")),
          datasets: [
            {
              label: "Income",
              data: eachDayTransactions.map((i) => i.income),
              borderRadius: 3,
              borderColor: "rgba(0,0,0,1)",
              animations: {
                backgroundColor: {
                  type: "color",
                  duration: 1000,
                  easing: "linear",
                  from: "rgba(61, 130, 246, 1)",
                  to: "rgba(61, 130, 246, 0.7)",
                  loop: true,
                },
              },
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  )
}
