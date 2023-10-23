import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/Auth.Context"
import { useHttp } from "../hooks/http.hook"
import { useNavigate } from "react-router-dom";
import { useMessage } from "../hooks/message.hook"

const AuthPage = () => {
	const auth = useContext(AuthContext)
	let nav = useNavigate()
	const message = useMessage()
	const { loading, error, request, clearError } = useHttp()
	const [form, setForm] = useState({
		email: '', password: ""
	})
	useEffect(() => {
		message(error)
		clearError()
	}, [error, message, clearError])
	const registerHandler = async () => {
		try {
			const data = await request('/api/auth/register', "POST", { ...form })
			console.log(data)
		} catch (e) {
			console.log(e)
		}
	}
	useEffect(() => {
		window.M.updateTextFields()
	}, [])
	const loginHandler = async () => {
		try {
			const data = await request('/api/auth/login', "POST", { ...form })
			console.log(data)
			if (data.message !== 'password error') {
				auth.login(data.token, data.userId)
				nav("/create")
			}

		} catch (e) {
			console.log(e)
		}
	}
	const changeHandler = e => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}


	return (
		<div className='row'>
			<div className="col s6 offset-s3">
				<h1>confirm link</h1>
				<div className="card blue darken-1">
					<div className="card-content white-text">
						<span className="card-title">Card Title</span>
						<div className="">
							<div className="input-field ">
								<input placeholder="confirm email" value={form.email} onChange={e => changeHandler(e)} name='email' type="text" className="validate" />
								<label htmlFor="first_name">email</label>
							</div>
							<div className="input-field ">
								<input placeholder="confirm password" value={form.password} onChange={e => changeHandler(e)} name='password' type="password" className="validate" />
								<label htmlFor="first_name">password</label>
							</div>
						</div>
					</div>
					<div className="card-action">
						<button className='btn yellow darken-4' disabled={loading} onClick={() => loginHandler()}>login</button>
						<button className='btn grey lighten-1' disabled={loading} onClick={() => registerHandler()}>regist</button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default AuthPage