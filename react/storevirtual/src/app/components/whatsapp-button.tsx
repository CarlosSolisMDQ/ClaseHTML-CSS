'use client'

import Image from 'next/image'
import WhatsappIcon from '../icons/5296520_bubble_chat_mobile_whatsapp_whatsapp logo_icon.svg';

export default function Whatsapp(){
    return <a aria-label="Chat on WhatsApp" href="https://wa.me/+555555555"> <Image alt="Chat on WhatsApp" src={WhatsappIcon} width={50}
    height={50} />Hablenos por Whatsapp!</a>

}



