// Components
import NavBar from '../components/navBar'
import Body from '../components/body'
import FooterIcons from '../components/footerIcons'

export default function Home() {
  return (
    <div className='h-fixed h-screen'>
      <div className='font-FiraCode bg-gradient-to-br from-c-charcoal to-c-blue text-c-white h-full'>
        <div className='h-full grid grid-flow-row'>
          <div>
            <NavBar/>
          </div>

          <div className='animate-fade-in-up'>
            <Body/>
          </div>

          <div className='grid grid-flow-col content-end'>
            <FooterIcons/>
          </div>
        </div>
      </div>
    </div>
  )
}
