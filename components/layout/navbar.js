import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getData } from 'utiles/fetchData';
import { Context } from 'store/globalstate';
import filtering from 'utiles/filter';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter();
    const {dispatch} = useContext(Context)

    const [search, setSearch] = useState('all');

    useEffect(() => {
        if(!search) setSearch('all');
        filtering({ router, search })
    }, [search])


    const isActive = (path) => {
        if(router.route === `/${path}`) return 'active';
        return ''
    }

    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     filtering({router, search})
    // }
    
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <img className="nav-brand" src="navbrand.png" alt="note" style={{width: '50px', heigth: '50px'}}/>
                <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/" ><span className={`nav-link ${isActive('')}`}>All Notes</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" ><span className={`nav-link ${isActive('about')}`}>About</span></Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control form-control-sm me-2" type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)} aria-label="Search" />                    </form>
                </div>
            </div>
        </nav>
        <div className="row flex-row flex-row-reverse">
            <div className="col-8 col-md-5">
                <nav className={`navbar side-nav ${isOpen ? 'show' : ''}  navbar-light bg-light d-flex flex-column  h-100 w-100 `}>                        
                            <a className="nav-link active" aria-current="page" href="#">All Notes</a>
                        
                            <a className="nav-link" href="#">About</a>
                  
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </nav>
            </div>
        </div>
        </>
    )
}