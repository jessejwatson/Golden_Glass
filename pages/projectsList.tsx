import ComingSoon from "../components/comingSoon";
import FooterIcons from "../components/footerIcons";
import MyHealth from "../components/myHealth";
import NavBar from "../components/navBar";
import ThisWebsite from "../components/thisWebsite";

export default function ProjectsList() {
    return (
      <div className='h-screen'>
        <div className='font-FiraCode bg-gradient-to-br from-c-charcoal to-c-blue text-c-white h-full grid grid-flow-row min-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-c-green scrollbar-track-c-blue'>
          <div>
            <NavBar/>
          </div>

          <section className="max-w-7xl m-auto">
            <div className="p-6 flex flex-col gap-8 md:flex-row">
              <MyHealth/>
              <ThisWebsite/>
            </div>
          </section>

          <div className='grid grid-flow-col content-end'>
            <FooterIcons/>
          </div>
        </div>
      </div>
    )
  }