import { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPinMap } from 'react-icons/bs'

const Contact = () => {
  const [senderName, setSenderName] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [mailSubject, setMailSubject] = useState<string>('')

  return (
    <div
      id="contact"
      className="Projects py-24 px-10 bg-white-alabaster dark:bg-transparent"
    >
      <div className="space-y-3 md:col-span-3 text-center md:text-left">
        <div className="before:bg-gray-alto heading text-gray-nevada text-sm md:text-md tracking-extrawide flex items-center justify-center md:justify-start">
          <p>REACH ME</p>
        </div>
        <div>
          <h1 className="font-bold text-clay dark:text-white-seashell text-3xl md:text-4xl">
            Contact Information
          </h1>
        </div>
        <div className="md:flex md:justify-between w-full space-y-12">
          <form action="mailto:contact@tawanb.dev" method="get">
            <div className="w-full h-full space-y-3">
              <input
                type="text"
                name="Name"
                id="sender"
                className="w-full text-sm py-2 px-4 font-normal rounded-md outline-blue-light dark:outline-blue-dark bg-white dark:bg-gray-nevada"
                placeholder="Name"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                required={true}
              />
              <input
                type="text"
                name="subject"
                id="sender"
                className="w-full text-sm py-2 px-4 font-normal rounded-md outline-blue-light dark:outline-blue-dark bg-white dark:bg-gray-nevada"
                placeholder="Subject"
                value={mailSubject}
                onChange={(e) => setMailSubject(e.target.value)}
                required={true}
              />
              <textarea
                name="body"
                id="sender"
                className="w-full py-2 px-4 font-normal resize-none min-h-[120px] rounded-md outline-blue-light dark:outline-blue-dark bg-white dark:bg-gray-nevada"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required={true}
              />
              <button
                type="submit"
                className="w-full outline-none bg-blue-light dark:bg-blue-dark text-white"
              >
                Send message
              </button>
            </div>
          </form>
          <div className="h-full w-full grid place-content-center space-y-4">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-light text-blue-light bg-opacity-10 dark:bg-opacity-5 dark:bg-blue-dark dark:text-blue-dark rounded-lg">
                <BsPinMap style={{ strokeWidth: '0.3' }} />
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-cod dark:text-white-seashell">
                  Address
                </p>
                <p className="text-gray-nevada dark:text-white text-sm">
                  Bangkok, Thailand
                </p>
              </div>
            </div>
            <a href="mailto:contact@tawanb.dev" style={{ color: 'inherit' }}>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-light text-blue-light bg-opacity-10 dark:bg-opacity-5 dark:bg-blue-dark dark:text-blue-dark rounded-lg">
                  <AiOutlineMail style={{ strokeWidth: '2' }} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-cod dark:text-white-seashell">
                    E-Mail
                  </p>
                  <p className="text-gray-nevada dark:text-white text-sm">
                    contact@tawanb.dev
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
