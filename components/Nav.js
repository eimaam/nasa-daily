const { useSession, signOut, signIn } = require("next-auth/react")
const { default: Link } = require("next/link")
import style from '../styles/nav.module.scss'

export default function Nav(){
    const { data: session } = useSession()

    // function to hide or show nav bar on mobile
  const toggleNav = () => {
    const navItems = document.querySelector('#navItems');

    if(navItems.style.display != "flex"){
      navItems.style.display = "flex"
    }else{
      navItems.style.display = "none"
    }
  }

    return (
        <nav className={style.nav}>
          <div>
            {session ? <h2>{session.user.name}</h2> : <h2>NASA Daily</h2>}
          </div>
          <ul id='navItems' className={style.ul}>
            <li><Link href="/">Home</Link></li>
            <li><a href="https://api.nasa.gov/index.html#apply-for-an-api-key">API Doc</a></li>
            <li><Link href="/photooftheday">TODAY</Link></li>
            <li><Link href="">About</Link></li>
            <li><a href="https://www.github.com/eimaam/nasa-daily">Source Code</a></li>
            {session ? 
            <li id='logOutMobile' onClick={() => signOut()}>
              <button>Sign Out</button>
            </li>
            :
            <li id='logOutMobile' onClick={() => signIn()}>
              <button type='button'>Sign In</button>
            </li>
            }
          </ul>
          {session &&
          <div id='logOut' onClick={() => signOut()}>
            <button>Sign Out</button>
          </div>
          }
          <div className={style.toggler} onClick={toggleNav}>
            <h1 className={style.h1}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.25 5.25H7.5V6.75H23.25V5.25Z" fill="white"/>
                    <path d="M19.875 11.25H4.125V12.75H19.875V11.25Z" fill="#fff"/>
                    <path d="M16.5 17.25H0.75V18.75H16.5V17.25Z" fill="white"/>
                </svg>
            </h1>
          </div>
        </nav>
      )
}   
