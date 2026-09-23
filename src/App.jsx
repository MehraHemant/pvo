import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Introduction from './components/Introduction.jsx'
import Journey from './components/Journey.jsx'
import Services from './components/Services.jsx'
import Team from './components/Team.jsx'
import MissionVision from './components/MissionVision.jsx'
import Empanelments from './components/Empanelments.jsx'
import CaseStudies from './components/CaseStudies.jsx'
import Brands from './components/Brands.jsx'
import Footer from './components/Footer.jsx'

// The five blue dividers between sections are 49px tall in the PSD.
function Bar() {
  return <div className="h-2 w-full bg-pvo-blue xl:h-bar" aria-hidden="true" />
}

export default function App() {
  return (
    <>
      <Header />
      <main className="min-w-0 overflow-x-clip">
        <Hero />
        <Introduction />
        <Bar />
        <Journey />
        <Services />
        <Bar />
        <Team />
        <Bar />
        <MissionVision />
        <Bar />
        <Empanelments />
        <Bar />
        <CaseStudies />
        <Brands />
      </main>
      <Footer />
    </>
  )
}
