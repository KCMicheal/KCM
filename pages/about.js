import { toggleTheme } from "@/components/themeSwitch"

export default function About() {
    return (
        <div>
            <h1 className="">Hello About Page</h1>
            <button onClick={toggleTheme} className="">Change theme</button>
        </div>
    )
}