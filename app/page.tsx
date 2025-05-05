import Footer from "./_components/Footer/Footer"
import Header from "./_components/Header/Header"
import LandingAbout from "./_components/LandingAbout/LandingAbout"
import TemplatesCard from "./_components/TemplatesDiv/TemplatesDiv"
import WelcomeDiv from "./_components/WelcomeDiv/WelcomeDiv"

export default function Home() {
  return (
    <main>
      <Header/>
      <WelcomeDiv/>
      <TemplatesCard/>
      <LandingAbout/>
      <Footer/>
    </main>
  )
}
