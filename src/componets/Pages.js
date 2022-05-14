import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../stylesheets/pages.scss'

export function Home() {
  return (
    <div>
      <h1>[Company Websie]</h1>
      <nav>
        <Link to="about">About</Link>
        <Link to="events">Events</Link>
        <Link to="products">Products</Link>
        <Link to="contact">Contact Us</Link>
      </nav>
    </div>
  );
}


export function About() {
  return (
    <div>
      <h1>[About]</h1>
    </div>
  );
}


export function Events() {
  return (
    <div>
      <section className="events">
        <h1>[Event Calendar]</h1>
      </section>    </div>
  );
}


export function Products() {
  return (
    <div>
      <h1>[Products]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation()
  return (
    <div>
      <h1>Reource 404 {location.pathname}</h1>
    </div>
  );
}