import { FiGithub } from 'react-icons/fi'
import { GrInstagram } from 'react-icons/gr'
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialTwitter
} from 'react-icons/sl'

export interface SocialAccountsProps {
  cls: string
  iconSize: number
}

const SocialAccounts = ({ cls, iconSize }: SocialAccountsProps) => {
  return (
    <div className={cls}>
      <a
        href="https://www.linkedin.com/in/tboonma"
        target="_blank"
        rel="noreferrer"
      >
        <SlSocialLinkedin
          className={
            `text-clay dark:text-white-seashell hover:opacity-50 stroke-[20] duration-300` +
            (iconSize ? ` w-${iconSize} h-${iconSize}` : ' w-6 h-6')
          }
        />
      </a>
      <a href="https://github.com/tboonma" target="_blank" rel="noreferrer">
        <FiGithub
          className={
            `text-clay dark:text-white-seashell hover:opacity-50 stroke-[2.6] duration-300` +
            (iconSize ? ` w-${iconSize} h-${iconSize}` : ' w-6 h-6')
          }
        />
      </a>
      <a
        href="https://www.instagram.com/tboonma_"
        target="_blank"
        rel="noreferrer"
      >
        <GrInstagram
          className={
            `text-clay dark:text-white-seashell hover:opacity-50 stroke-[0.03] duration-300` +
            (iconSize ? ` w-${iconSize} h-${iconSize}` : ' w-6 h-6')
          }
        />
      </a>
      <a
        href="https://www.facebook.com/tboonmaeiei"
        target="_blank"
        rel="noreferrer"
      >
        <SlSocialFacebook
          className={
            `text-clay dark:text-white-seashell hover:opacity-50 stroke-[18] duration-300` +
            (iconSize ? ` w-${iconSize} h-${iconSize}` : ' w-6 h-6')
          }
        />
      </a>
      <a
        href="https://twitter.com/Tboonmaeiei"
        target="_blank"
        rel="noreferrer"
      >
        <SlSocialTwitter
          className={
            `text-clay dark:text-white-seashell hover:opacity-50 stroke-[18] duration-300` +
            (iconSize ? ` w-${iconSize} h-${iconSize}` : ' w-6 h-6')
          }
        />
      </a>
    </div>
  )
}

export default SocialAccounts
