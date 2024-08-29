import DeleteButton from "@/components/buttons/delete_button"
import PrimaryButton from "@/components/buttons/primary_button"
import SecondaryButton from "@/components/buttons/secondary_button"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="flex gap-4 p-5">
        <PrimaryButton
          // clickFunction={}
          disabled={false}
          width="10%"
          height="40px"
          buttonText="Save"
        />

        <SecondaryButton
          // clickFunction={}
          width={"10%"}
          height={"40px"}
          buttonText={"Cancel"}
        />

        <DeleteButton
          // clickFunction={}
          disabled={false}
          width={"10%"}
          height={"40px"}
          buttonText={"Delete"}
        />
      </div>
    </>
  )
}
