'use client'

import Image from 'next/image'
import WhatsappIcon from '../icons/5296520_bubble_chat_mobile_whatsapp_whatsapp logo_icon.svg';

export default function WhatsApp(){
    return <div className="fixed left-5 top-3/4 z-50 px-5 py-3 bg-transparent flex flex-col space-y-3">
        <a aria-label="Chat on WhatsApp" href="https://wa.me/+555555555"> <Image alt="Chat on WhatsApp" src={WhatsappIcon} width={79}
        height={50} />Hablenos!</a>
    </div>

}



