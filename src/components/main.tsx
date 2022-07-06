import { useStorage } from "@plasmohq/storage"

export const Main = ({ name = "Extension" }) => {
  const [openCount] = useStorage<number>("open-count", (storedCount) =>
    typeof storedCount === "undefined" ? 0 : storedCount + 1
  )

  const [checked, setChecked] = useStorage("checked", true)

  return (
    <div
      className="flex flex-col p-4"
      >
      <h1>
        Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
      </h1>
      <p>Times opened: {openCount}</p>
      <input
        type={"checkbox"}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  )
}