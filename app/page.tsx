import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import TemplatesCard from "./components/TemplatesDiv/TemplatesDiv"
import WelcomeDiv from "./components/WelcomeDiv/WelcomeDiv"

export default function Home() {
  return (
    <main>
      <Header/>
      <WelcomeDiv/>
      <TemplatesCard/>
      <Footer/>
    </main>
  )
}
