import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../context/Auth.Context"
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	let nav = useNavigate()
	const auth = useContext(AuthContext)

	const logOutHandler = e => {
		e.preventDefault();
		auth.logout()
		nav('/')
	}

	return (
		<nav>
			<div class="nav-wrapper">
				<a href="#" class="brand-logo">small link</a>
				<ul id="nav-mobile" class="right hide-on-med-and-down">
					<li><NavLink to='/create'>Create</NavLink></li>
					<li><NavLink to='/links'>links</NavLink></li>
					<li> <a href='/' onClick={logOutHandler}>exit</a> </li>
				</ul>
			</div>
		</nav>

	)
}
