import FacebookHackerCup from '@src/assets/img/certificates/facebook-hacker-cup.jpg'
import AgodaInternPitch from '@src/assets/img/certificates/Agoda-InternPitch.jpg'
import GDSC from '@src/assets/img/certificates/gdsc.jpg'
import ModalImage from '@avidian/react-modal-image'

const Certificates = () => {
  return (
    <div id="certificates" className="Projects py-24 px-10">
      <div className="space-y-3 md:col-span-3 text-center md:text-left">
        <div className="before:bg-gray-alto heading text-gray-nevada text-sm md:text-md tracking-extrawide flex items-center justify-center md:justify-start">
          <p>AWARDS</p>
        </div>
        <div>
          <h1 className="font-bold text-clay dark:text-white-seashell text-3xl md:text-4xl">
            Certificates
          </h1>
        </div>
        <div className="w-full h-full grid md:grid-cols-3 gap-10 place-content-center pt-8">
          <div className="border-gray-wildsand border-[1px] rounded-lg dark:border-0 dark:bg-white">
            <ModalImage
              className="rounded-t-lg h-72 w-full object-cover"
              small={FacebookHackerCup}
              medium={FacebookHackerCup}
              large={FacebookHackerCup}
              alt="Facebook Hacker Cup 2021"
              hideDownload={true}
            />
            <div className="p-3">
              <h2 className="font-semibold text-clay text-left">
                Facebook Hacker Cup 2021
              </h2>
              <p className="text-sm text-left">Meta</p>
              <div className="flex flex-wrap pt-3 gap-x-2 gap-y-1">
                <div className="text-gray-nevada border-white-seashell border-[0.5px] rounded-lg text-xs py-1 px-2">
                  C++
                </div>
                <div className="text-gray-nevada border-white-seashell border-[0.5px] rounded-lg text-xs py-1 px-2">
                  Algorithm
                </div>
              </div>
            </div>
          </div>
          <div className="border-gray-wildsand border-[1px] rounded-lg dark:border-0 dark:bg-white">
            <ModalImage
              className="rounded-t-lg h-72 w-full object-cover"
              small={AgodaInternPitch}
              medium={AgodaInternPitch}
              large={AgodaInternPitch}
              alt="Agoda Internship Pitch Competition 2022"
              hideDownload={true}
            />
            <div className="p-3">
              <h2 className="font-semibold text-clay text-left">
                Agoda Internship Pitch Competition 2022
              </h2>
              <p className="text-sm text-left">Agoda</p>
              <div className="flex flex-wrap pt-3 gap-x-2 gap-y-1"></div>
            </div>
          </div>
          <div className="border-gray-wildsand border-[1px] rounded-lg dark:border-0 dark:bg-white">
            <ModalImage
              className="rounded-t-lg h-72 w-full object-cover"
              small={GDSC}
              medium={GDSC}
              large={GDSC}
              alt="GDSC Core Team 2021 - 2022"
              hideDownload={true}
            />
            <div className="p-3">
              <h2 className="font-semibold text-clay text-left">
                GDSC Core Team Member 2021 - 2022
              </h2>
              <p className="text-sm text-left">
                Google Developer Student Clubs
              </p>
              <div className="flex flex-wrap pt-3 gap-x-2 gap-y-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificates
