import React from 'react'
import "./Nav.css"

export const Nav = () => {
  return (
    <div className="App">
      {/* <div class="smooth"> */}
		<header>
			<h3>EasyJob</h3>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="#two">AboutUs</a></li>
				<li><a href="/candidate">Candidates</a></li>
				<li><a href="/newad">New Ad</a></li>
				<li><a href="#bottom">Log out</a></li>
			</ul>
		</header>
    </div>
  )
}
