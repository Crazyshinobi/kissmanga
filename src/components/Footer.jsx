import React from 'react'
import { Link } from 'react-router-dom';

export const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <div className='bg-black text-white p-5'>
        <div className="flex gap-8 justify-center">
          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="/bookmarks">Bookmarks</Link>
          <span> | </span>
          <Link to="/contact">Contact Us</Link>
          <span> | </span>
          <Link to="/legal">Legal Disclaimer</Link>
        </div>
        <div className='mt-3'>
          <p>The use of the manga and other promotional materials are allowed under the fair use clause of the Copyright Law and copyrights and trademarks are held by their respective owners © {date.getFullYear()} Kissmanga.in</p>
        </div>
      </div>
    </footer>
  )
}
