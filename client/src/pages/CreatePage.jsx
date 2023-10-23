import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { AuthContext } from "../context/Auth.Context"
import { useHttp } from "../hooks/http.hook"

const CreatePage = () => {
	const auth = useContext(AuthContext)
	let nav = useNavigate()
	const [link, setLink] = useState('')
	const { request } = useHttp()
	useEffect(() => {
		window.M.updateTextFields()
	}, [])
	const pressHandler = async e => {
		if (e.key === 'Enter') {
			try {
				const data = await request('/api/link/generate', "POST", { from: link }, {
					Authorization: `Bearer ${auth.token}`
				})
				console.log(data)
				nav(`/detail/${data.link._id}`)
			} catch (e) {

			}
		}
	}
	return (
		<div className='row'>
			<div className="col s8 offset-s2">
				<div className="input-field ">
					<input placeholder="confirm link" value={link} onChange={e => setLink(e.target.value)} onKeyPress={pressHandler} type="text" className="validate" />
					<label htmlFor="first_name">link</label>
				</div>
			</div>
		</div>
	)
}
export default CreatePage