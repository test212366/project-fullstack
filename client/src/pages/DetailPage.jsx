import { useCallback, useContext, useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { LickCard } from "../components/LickCard"
import { AuthContext } from "../context/Auth.Context"
import { useHttp } from "../hooks/http.hook"

const DetailPage = () => {
	const { token } = useContext(AuthContext)
	const [link, setLink] = useState(null)
	const { request, loading } = useHttp()
	const linkId = useParams().id

	const getLink = useCallback(async () => {
		try {
			const fetched = await request(`/api/link/${linkId}`, "GET", null, {
				Authorization: `Bearer ${token}`
			})
			console.log(fetched)
			setLink(fetched)
		} catch (e) {
			console.log(e)
		}
	}, [token, linkId, request])
	useEffect(() => {
		getLink()
	}, [getLink])
	return (
		<>
			{!loading && link && <LickCard link={link} />}
		</>
	)
}
export default DetailPage