import SocialAccounts from '@src/components/SocialAccounts'

const Footer = () => {
  return (
    <footer className="w-full p-3 dark:bg-gray-shark bg-white-seashell">
      <SocialAccounts
        cls="flex items-center space-x-7 justify-center w-full py-2"
        iconSize={4}
      />
      <div className="text-center text-clay dark:text-white-seashell">
        Tawan Boonma
      </div>
      <div className="text-center text-clay dark:text-white-seashell">
        Thanks to{' '}
        <a href="https://www.figma.com/community/file/1160861462615915842">
          Portfolio Design
        </a>
      </div>
    </footer>
  )
}

export default Footer
