import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav id="navbarwrapper" className="h-20 flex justify-center">

        <div id="navbarcontainer" className=" max-w-screen-xl h-full w-full flex items-center px-5 text-lg">

            <h1 className=" flex-1">Jasmail Duck</h1>

            <div id="navlinkcontainer" className=" flex">
                <Link title="About" to={"#About"} className="mx-2">About</Link>
                <Link title="Services" to={"#Services"} className="mx-2">Services</Link>
                <Link title="Projects" to={"#Projects"} className="mx-2">Projects</Link>
            </div>

        </div>

    </nav>
  )
}

export default Navbar