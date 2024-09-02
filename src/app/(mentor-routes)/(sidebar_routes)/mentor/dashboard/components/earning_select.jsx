import { FormControl, MenuItem, Select } from "@mui/material"
import { CalendarCheck } from "lucide-react"

export default function EarningSelect({ earningType, setEarningType }) {
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 110 }}>
        <Select
          sx={{
            borderRadius: 2,
          }}
          value={earningType}
          onChange={(e) => {
            console.log(e.target.value)
            setEarningType(e.target.value)
          }}
          displayEmpty
          renderValue={() => {
            return (
              <div className="flex items-center gap-2">
                <CalendarCheck size={20} />
                {earningType}
              </div>
            )
          }}
        >
          <MenuItem value={"This week"} sx={{ display: "flex", gap: 1 }}>
            This Week
          </MenuItem>
          <MenuItem value={"This month"} sx={{ display: "flex", gap: 1 }}>
            This Month
          </MenuItem>
          <MenuItem value={"This year"} sx={{ display: "flex", gap: 1 }}>
            This Year
          </MenuItem>
          <MenuItem value={"All time"} sx={{ display: "flex", gap: 1 }}>
            All time
          </MenuItem>
        </Select>
      </FormControl>
    </>
  )
}
