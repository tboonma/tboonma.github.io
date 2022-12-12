import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { GrInstagram } from 'react-icons/gr'
import {
  SlSocialFacebook,
  SlSocialLinkedin,
  SlSocialTwitter
} from 'react-icons/sl'

const Footer = () => {
  return (
    <div className="w-full p-3 dark:bg-gray-shark bg-white-seashell">
      <div className="flex items-center space-x-7 justify-center w-full py-2">
        <a href="https://www.linkedin.com/in/tboonma" target="_blank">
          <SlSocialLinkedin className="w-4 h-4 text-clay dark:text-white-seashell hover:opacity-50 stroke-[20] duration-300" />
        </a>
        <a href="https://github.com/tboonma" target="_blank">
          <FiGithub className="w-4 h-3 text-clay dark:text-white-seashell hover:opacity-50 stroke-[2.6] duration-300" />
        </a>
        <a href="https://www.instagram.com/tboonma_" target="_blank">
          <GrInstagram className="w-4 h-4 text-clay dark:text-white-seashell hover:opacity-50 stroke-[0.03] duration-300" />
        </a>
        <a href="https://www.facebook.com/tboonmaeiei" target="_blank">
          <SlSocialFacebook className="w-4 h-4 text-clay dark:text-white-seashell hover:opacity-50 stroke-[18] duration-300" />
        </a>
        <a href="https://twitter.com/Tboonmaeiei" target="_blank">
          <SlSocialTwitter className="w-4 h-4 text-clay dark:text-white-seashell hover:opacity-50 stroke-[18] duration-300" />
        </a>
      </div>
      <div className="text-center text-clay dark:text-white-seashell">
        Tawan Boonma
      </div>
      <div className="text-center text-clay dark:text-white-seashell">
        Thanks to{' '}
        <a href="https://www.figma.com/community/file/1160861462615915842">
          Portfolio Design
        </a>
      </div>
    </div>
  )
}

export default Footer
