import './App.css';
import CommandBar from './components/CommandBar';
import placeholderbg from './img/Screenshot 2024-02-19 130153.png';
import { useState } from 'react';

function App() {
	const [expanded, setExpanded] = useState(false);
	return (
		<div className={expanded ? 'App blurred' : 'App'}>
			<CommandBar expanded={expanded} setExpanded={setExpanded} />
			<div className={expanded ? 'body blurred' : 'body'}>
				<img src={placeholderbg}></img>
			</div>
		</div>
	);
}

export default App;
