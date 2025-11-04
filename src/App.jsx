import { useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Apartments from './components/Apartments';
import Gallery from './components/Gallery';
import Floorplans from './components/Floorplans';
import ChannelPartners from './components/ChannelPartners';
import AgenciesLandowners from './components/AgenciesLandowners';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default function App() {
const nav = useMemo(() => ([
{ id: 'home', label: 'Home' },
{ id: 'about', label: 'About' },
{ id: 'apartment', label: 'Apartment' },
{ id: 'gallery', label: 'Gallery' },
{ id: 'floorplan', label: 'Floorplan' },
{ id: 'channelpartners', label: 'Channel Partners' },
{ id: 'agencies', label: 'Agencies & Landowners' },
{ id: 'contact', label: 'Contact' },
]), []);


return (
<div className="min-h-screen flex flex-col">
<Header nav={nav} />
<main>
<section id="home" className="section"><Hero /></section>
<section id="about" className="section"><About /></section>
<section id="apartment" className="section"><Apartments /></section>
<section id="gallery" className="section bg-gray-50"><Gallery /></section>
<section id="floorplan" className="section"><Floorplans /></section>
<section id="channelpartners" className="section bg-gray-50"><ChannelPartners /></section>
<section id="agencies" className="section"><AgenciesLandowners /></section>
<section id="contact" className="section bg-gray-50"><Contact /></section>
</main>
<Footer />
</div>
);
}