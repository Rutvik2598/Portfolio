import { ThemeToggle } from "@/components/ThemeToggle"
import {StarBackground} from "@/components/StarBackground"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSections } from "@/components/ProjectsSections"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { ExperienceSection } from "../components/ExperienceSection"

export const Home = () => {
    return <div className="min-h-screen bg-background text-forground overflow-x-hidden">
        { /* Theme toggle */ }
        <ThemeToggle/>

        { /* Background effect */ }
        <StarBackground/>

        { /* Navbar */ }
        <Navbar/>

        { /* Main content */ }

        <main>
            <HeroSection/>
            <AboutSection/>
            <ExperienceSection/>
            <SkillsSection/>
            <ProjectsSections/>
            <ContactSection/>
        </main>


        { /* Footer */ }
        <Footer />
    </div>
}