import './home.css';
import { Header, Footer } from '@components';
import PlacesPreview from './sections/PlaceList/PlacesPreview';
import ShipsPreview from './sections/Ships/ShipsPreview';

const Home = () => {

  return (
    <div className="home-page">
      <Header />
      <main>
        <PlacesPreview />
        <ShipsPreview />
      </main>
      <Footer />
    </div>
  )
}

export default Home;