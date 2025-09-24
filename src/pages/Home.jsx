import { ThemeToggle } from "@/components/ThemeToggle"
import {StarBackground} from "@/components/StarBackground"
import { Navbar } from "@/components/Navbar"

export const Home = () => {
    return <div className="min-h-screen bg-background text-forground overflow-x-hidden">
        { /* Theme toggle */ }
        <ThemeToggle/>

        { /* Background effect */ }
        <StarBackground/>

        { /* Navbar */ }
        <Navbar/>

        { /* Main content */ }


        { /* Footer */ }
    </div>
}