import * as React from 'react';
import { useState, useEffect } from 'react';


const App = (props: AppProps) => {
	const [greeting, setGreeting] = useState<string>('');

	

	return (
		<main className="container my-5">
			<h1 className="text-primary text-center">Hello </h1>
		</main>
	);
};

interface AppProps {}



export default App;
