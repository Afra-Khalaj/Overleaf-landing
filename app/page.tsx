import Footer from "./_components/Footer/Footer"
import Header from "./_components/Header/Header"
import TemplatesCard from "./_components/TemplatesDiv/TemplatesDiv"
import WelcomeDiv from "./_components/WelcomeDiv/WelcomeDiv"

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
