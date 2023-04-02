import React, { useState, useEffect, FC } from 'react'
import FancyCarousel from 'react-fancy-circular-carousel'
import 'react-fancy-circular-carousel/FancyCarousel.css'
import './Carousel.css'

interface props {
    autoRotate: boolean
}

const Carousel: FC<props> = ({autoRotate}: props) => {

    useEffect(() => {

    }, [])

    const [focusElement, setFocusElement] = useState(0)

    //const images = [image1, image2, image3, image4, image5, image6, image7]
  
    const items = [
        {       
            name: "Great Wall of China", 
            descp: "Great might be an understatement. One of the world’s largest building-construction projects, the Great Wall of China is widely thought to be about 5,500 miles (8,850 km) long; a disputed Chinese study, however, claims the length is 13,170 miles (21,200 km)."
        }, 
        {
            name: "Chichén Itzá",
            descp: "Chichén Itzá is a Mayan city on the Yucatán Peninsula in Mexico, which flourished in the 9th and 10th centuries CE. Under the Mayan tribe Itzá—who were strongly influenced by the Toltecs—a number of important monuments and temples were built."
        },
        {
            name: "Petra",
            descp: "The ancient city of Petra, Jordan, is located in a remote valley, nestled among sandstone mountains and cliffs. It was purported to be one of the places where Moses struck a rock and water gushed forth."
        },
        {
            name: "Machu Picchu",
            descp: "This Incan site near Cuzco, Peru, was “discovered” in 1911 by Hiram Bingham, who believed it was Vilcabamba, a secret Incan stronghold used during the 16th-century rebellion against Spanish rule. "
        },
        {
            name: "Christ the Redeemer",
            descp: "Christ the Redeemer, a colossal statue of Jesus, stands atop Mount Corcovado in Rio de Janeiro. Its origins date to just after World War I, when some Brazilians feared a “tide of godlessness.”"
        },
        {
            name: "Colosseum",
            descp: "The Colosseum in Rome was built in the first century by order of the Emperor Vespasian. A feat of engineering, the amphitheater measures 620 by 513 feet (189 by 156 meters) and features a complex system of vaults."
        },
        {
            name: "Taj Mahal",
            descp: "This mausoleum complex in Agra, India, is regarded as one of the world’s most iconic monuments and is perhaps the finest example of Mughal architecture.It took about 22 years and 20,000 workers to construct the complex."
        }
    ]

  return (
    <div className="carousel-section">
        <FancyCarousel carouselRadius={250} peripheralImageRadius={60} centralImageRadius={100} setFocusElement={setFocusElement} autoRotateTime={(autoRotate?2:0)}/>
        <div className="info-box">
        <h1 className="heading">{items[focusElement].name}</h1>
        <p className="description">{items[focusElement].descp}</p>
        </div>
    </div>
  )
}

export default Carousel