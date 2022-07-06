import { useStorage } from "@plasmohq/storage"

export const Sub = ({ name = "Extension" }) => {
  const [openCount] = useStorage<number>("open-count")

  const [checked] = useStorage("checked")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <p>Times opened: {openCount}</p>
      <input type={"checkbox"} readOnly checked={checked} />
    </div>
  )
}