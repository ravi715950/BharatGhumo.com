import Destination from '@/assets/destination/Destination'
import Hero from '@/assets/hero/Hero'
import Trip from '@/assets/trip/Trip'


const Homepage = () => {
  return (
    <>
       <Hero
    cName="hero"
    heroImg={'/taj.jpg'}
    title="DO COME & VISIT"
    heading="Welcome To India"
    content="change_content"
    text="India once is not enough"
    buttonText="Travel Plan"
    url="/"
    btnClass="show"
    />
    <Destination/>
    <Trip/>
    </>
  )
}

export default Homepage