import { useCallback, useContext, useEffect, useState } from "react"
import { LinksList } from "../components/LinksList"
import { AuthContext } from "../context/Auth.Context"
import { useHttp } from "../hooks/http.hook"

const LinksPage = () => {
	const [links, setLinks] = useState(false)
	const { loading, request } = useHttp()
	const { token } = useContext(AuthContext)
	const fetchLinks = useCallback(async () => {
		try {
			const fetched = await request('/api/link', "GET", null, {
				Authorization: `Bearer ${token}`
			})
			console.log(fetched)
			setLinks(fetched)
		} catch (e) { }
	}, [])
	useEffect(() => { fetchLinks() }, [fetchLinks])
	return (
		<>
			{!loading && links && <LinksList links={links} />}</>
	)
}
export default LinksPage