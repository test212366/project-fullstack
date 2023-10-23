import 'materialize-css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthContext } from './context/Auth.Context'
import { useAuth } from './hooks/auth.hook'
import { useRoutes } from './routes'
import { Navbar } from './components/Navbar'

function App() {

	const { token, login, logout, userId } = useAuth()
	const isAuthtnticated = !!token
	const routes = useRoutes(isAuthtnticated)
	return (
		<AuthContext.Provider value={{ token, login, logout, userId, isAuthtnticated }}>
			<Router>
				{isAuthtnticated ? <Navbar /> : ''}
				<div className='container'>
					{routes}
				</div>
			</Router>
		</AuthContext.Provider>


	)
}

export default App
