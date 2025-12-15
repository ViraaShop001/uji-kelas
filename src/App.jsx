import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import StatCounter from "./components/StatCounter"
import StructureTree from "./components/StructureTree"
import ScheduleTable from "./components/ScheduleTable"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatCounter />
      <StructureTree />
      <ScheduleTable />
      <Gallery />
      <Footer />
    </div>
  )
}
