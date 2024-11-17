import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, MapPin, Clock, Phone } from 'lucide-react'
// import { GoogleMapsEmbed } from '@next/third-parties/google'

export default function SchlarbyLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-red-50">
      <header className="bg-red-700 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Schlarby`s</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#menu" className="hover:underline">Menu</a></li>
              <li><a href="#locations" className="hover:underline">Locations</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="w-full py-8 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Visit Our Flagship Location</h2>
            <p className="text-xl mb-4 text-center">Come experience the Schmeats at our main restaurant!</p>
            <div className="w-full h-[400px]">
              {/* <GoogleMapsEmbed
                apiKey="nice-try"
                
              /> */}
               <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24157.779846182602!2d-96.74144268035892!3d40.8120918313071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8796bf005ab81aa1%3A0x6fc47c5ed37c16d3!2sArby&#39;s!5e0!3m2!1sen!2sus!4v1731821818408!5m2!1sen!2sus"
      style={{
        border: 0,
        width: '100%',
        height: '400px',
      }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
            </div>
          </div>
        </section>

        <section className="bg-red-600 text-white py-20 text-center">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold mb-4">We Have The Schmeats</h2>
            <p className="text-xl mb-8">Indulge in our almost-famous roast beef and curly fries!</p>
            <Button size="lg" className="bg-white text-red-600 hover:bg-red-100">Order Now <ArrowRight className="ml-2" /></Button>
          </div>
        </section>

        <section id="menu" className="py-16 bg-white">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">Featured Items</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { name: "Mike Tyson's Juicy Ass $20mil", image: "/images/miketyson.jpg" },
        { name: "Jork chops and Peanits", image: "/images/jork.jpg" },
        { name: "Schloppy Jared $19.99", image: "/images/jared.png" }
      ].map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{item.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md"
            />
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Add to Order</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
</section>

        <section id="locations" className="py-16 bg-red-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Find a Schlarby`s Near You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {['New Pork', 'Los Mangeles', 'Chicarbo'].map((city, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{city}</CardTitle>
                    <CardDescription>Multiple locations available</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-2">
                      <MapPin className="mr-2" /> 123 Meaty Street
                    </div>
                    <div className="flex items-center mb-2">
                      <Clock className="mr-2" /> Open 10AM - 10PM
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-2" /> (555) 123-4567
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Get Directions</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-red-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Schlarby`s. All rights reserved.</p>
          <p className="mt-2">We have the schmeats!</p>
        </div>
      </footer>
    </div>
  )
}