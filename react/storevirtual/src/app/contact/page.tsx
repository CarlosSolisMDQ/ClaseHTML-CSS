import Image from 'next/image'
import ContactForm from "../components/contact-form";
import Whatsapp from "../components/whatsapp-button";


export default function Contact() {

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    <ContactForm />

    <Whatsapp />
    

    </main>
  )
}