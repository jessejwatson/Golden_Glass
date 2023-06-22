import Image from 'next/image'
import profilePic from '../assets/profilePic.png'
import tiling from '../assets/tiling.jpg'
import bike from '../assets/bike.jpg'

export default function BodyAboutMe() {
  return (
    <div className='px-16 flex justify-center content-center animate-fade-in-up'>
      <div className='max-w-xl'>

        <section className='pb-14'>
          <div className='p-10'>
            <Image className='mx-auto w-auto' src={profilePic} alt={'Profile Picture'} width={174}/>
          </div>
          <div>
            <p className='text-c-green'>So yeah, I&apos;m</p>
            <h1 className='text-3xl font-semibold'>Jesse Watson</h1>
            <p className='text-c-grey'>
              As I said, I am a uni student studying at RMIT Online on the Gold Coast.
              I love to code (Java, JS, React), write blog posts, play the guitar and sing.
              I also love going to the gym, getting out doors mountain biking and climbing.
            </p>
          </div>
        </section>

        <h1 className='text-3xl font-semibold'>My Story.</h1>

        <section className='pb-8'>
          <h2 className='text-xl text-c-green'>Where it all began...</h2>
          <p className='text-c-grey'>
          I grew up on the southern end of the Gold Coast in the Tweed Shire. I started
          my education in a public primary school. However, since my folks were teachers
          I was homeschooled until grade 10. I really enjoyed this experience and has led
          me to aim for a remote job in the future.
          </p>
        </section>

        <section className='pb-8'>
          <div className='p-10'>
            <Image className='mx-auto' src={tiling} alt={'Jesse Tiling'} width={300}/>
          </div>
          <h2 className='text-xl text-c-green'>My first job...</h2>
          <p className='text-c-grey'>
          After grade 10 I worked full time as a Tiler&apos;s apprentice. I learned a lot
          about what it means to work hard and show initiative. I was blessed with an
          incredible first boss and learned a lot about life from our conversations.
          </p>
        </section>

        <section className='pb-8'>
          <h2 className='text-xl text-c-green'>Starting something new...</h2>
          <p className='text-c-grey'>
          After a year tiling, I felt to move on and do something in the tech world as
          I&apos;ve always been inspired by it&apos;s inventions. From this decision I began a
          Degree in IT at RMIT Online through an online Australian University system
          called OUA. I chose to do uni online as I&apos;ve always loved remote, whether
          it&apos;s study or work.
          </p>
        </section>

        <section className='pb-8'>
          <h2 className='text-xl text-c-green'>My second job...</h2>
          <p className='text-c-grey'>
          When I left tiling I still needed to earn some coin, so I applied for a couple
          fast food places (McDonald&apos;s, KFC & Hungry Jacks - Australia&apos;s Burger King).
          The only place that got back to me was McDonald&apos;s (Maccas as us Aussies call it).
          I got the job at Maccas and was there for a year and a half - until...
          </p>
        </section>

        <section className='pb-8'>
          <h2 className='text-xl text-c-green'>Entering the industry...</h2>
          <p className='text-c-grey'>
          I completed one year of the IT degree aforementioned, then the university discontinued
          the degree. I was given the option of full-time study with no breaks to complete it; I
          opted for the less stressful option of transferring universities. However, I didn&apos;t
          even get that far.<br />
          By the time I decided to find another uni, it was too late to enrol for the year ahead,
          so I waited. God had a plan, however, because I ended up getting offered a job at a private
          school in the town I lived in - Systems Technician at Lindisfarne Anglican Grammar School.<br />
          This is where I am now, and I love it.
          </p>
        </section>

        <h1 className='text-3xl font-semibold'>My hobbies.</h1>

        <section className='pb-8'>
          <h2 className='text-xl text-c-green'>Music...</h2>
          <p className='text-c-grey'>
          I&apos;ve always loved music. My folks were involved in a Christian band that
          travelled around the country. Since then they were always involved in the
          worship team of whatever church they were a part of. I picked up the guitar
          when I was 11 and got my first guitar at 12. I still use that same acoustic
          folk guitar to this day. More recently I have began to work on my singing
          voice and have loved every minute of it.
          </p>
        </section>

        <section className='pb-8'>
          <div className='p-10'>
            <Image className='mx-auto' src={bike} alt={'Unboxing mountain bike'} width={300}/>
          </div>
          <h2 className='text-xl text-c-green'>Sports...</h2>
          <p className='text-c-grey'>
          In my school years I played a lot of basketball. I was never into any other
          sport as a kid. I never joined a team, but I went down to the local PCYC
          every week for a lesson and quick game.<br/>
          In the past couple years I have gotten into mountain biking. I ride the local <a className='externalLink' href={'https://goo.gl/maps/bssPdKvUMUjArwgKA'} target={'_blank'} rel="noreferrer">Currumbin
          Border Trails</a> regularly. In the past year I have been initiated into the
          climbing community in an indoor climbing gym in Robina on the Gold Coast — <a className='externalLink' href={'https://goo.gl/maps/xJtPu9t5wNZ5qVnC8'} target={'_blank'} rel="noreferrer">Alpine</a>.
          </p>
        </section>

        <section className='pb-8'>
          <h2 className='text-xl text-c-green'>Filmmaking...</h2>
          <p className='text-c-grey'>
          As I progressed through my high-school years I became interested in making YouTube
          videos. I used my dad&apos;s work account to get Premiere Pro for free and learned how
          the program works. After making about 25 videos I lost a passion for it. However,
          I still desire to get back into it.
          </p>
        </section>

        <section className='pb-8'>
          <h2 className='text-xl text-c-green'>Technology...</h2>
          <p className='text-c-grey'>
          Lastly, I am working on a bunch of technical projects that involve smart home
          automation and software development. I have learned ReactJS, NextJS (this
          website&apos;s framework) and have started learning React Native. I also &apos;stole&apos;
          a Raspbery Pi from work to use in my smart home automation endeavours.
          </p>
        </section>

      </div>
    </div>
  )
}
