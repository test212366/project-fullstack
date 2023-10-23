export const LickCard = ({ link }) => {
	return (
		<>
			<h2>link</h2>
			<p>Your link: <a href={link.to} target="_blank">{link.to}</a> </p>
			<p>Your from: <a href={link.from} target="_blank" >{link.from}</a> </p>
			<p>Your clicks: {link.clicks} </p>
			<p>Your link data: {new Date(link.date).toLocaleDateString()}</p>
		</>
	)
}