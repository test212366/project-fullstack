export const LinksList = ({ links }) => {
	console.log(links)
	if (links.length === 0) {
		return <p>none links</p>
	}
	return (
		<table>
			<thead>
				<tr>
					<th>number</th>
					<th>from</th>
					<th>In</th>
				</tr>
			</thead>

			<tbody>
				{links && links.map((link, index) => {
					return (
						<tr>
							<td>{index + 1}</td>
							<td>{link.from}</td>
							<td>{link.to}</td>
						</tr>
					)
				})}


			</tbody>
		</table>

	)
}