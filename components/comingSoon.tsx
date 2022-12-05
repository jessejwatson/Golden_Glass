import Link from "next/link";

export default function ComingSoon() {
    return (
      <div className=''>
        <Link className="text-c-green underline" href={'/'}>Home</Link>
            <h1 className="pb-6 text-lg">Coming soon!</h1>
            <p className=" text-c-grey">
                There is more to come!!<br/>
                Stay tuned - follow me on Twitter below...
            </p>
            <a className="" href="https://twitter.com/@jessals04" target={'_blank'} rel="noreferrer">
                <button className="oldSchoolBtn p-4 hover:text-c-green">Open My Twitter</button>
            </a>
      </div>
    )
  }