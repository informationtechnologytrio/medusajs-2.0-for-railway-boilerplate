import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <a href="https://storefront.anscg.net/hk/products/envision">
          <Image src="https://cloud-fhwtc10s1-hack-club-bot.vercel.app/0frame_21.png" className="w-full" alt="Tailwind Play" />
        </a>
      </div>
    </div>
  )
}

export default Hero
