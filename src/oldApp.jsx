import Hello from './assets/Hello'
import Contact from './assets/Contact'
import Counter from './assets/Counter'

function App() {
	const helloData = [
		{ name: 'Notswag', message: 'Hi there' },
		{ name: 'lnwza007', message: 'Hello world...' },
		{  }
	]

	return (
		<div className='App'>
			<Counter />
			{ helloData.map((data, index) => (
				<Hello key={index} name={data.name} message={data.message} />
			))}

			<Contact email="notswaglnwza007@gmail.com" phone="081-234-5678" />
		</div>
	)
}

export default App
