"use client";
import Link from 'next/link';
import { useState } from 'react';

export function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">      
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded-sm">
          Portfolio
        </Link>
        <nav aria-label="Primary navigation">
          <button
            aria-expanded={open}
            aria-controls="primary-nav"
            className="sm:hidden rounded-md border border-gray-200 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            ?
          </button>
          <ul
            id="primary-nav"
            className={`${open ? 'block' : 'hidden'} absolute left-0 right-0 top-full mx-4 mt-2 space-y-2 rounded-md border border-gray-200 bg-white p-4 shadow-sm sm:static sm:mx-0 sm:mt-0 sm:flex sm:space-y-0 sm:gap-6 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none`}
          >
            <li>
              <Link onClick={() => setOpen(false)} href="/about" className="block rounded-md px-2 py-1 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60">About</Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} href="/projects" className="block rounded-md px-2 py-1 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60">Projects</Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} href="/contact" className="block rounded-md px-2 py-1 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
