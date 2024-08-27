import './App.css';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

function App() {
	return (
		<div>
			<Section1 />
			<Section2 />
			<div className='relative top-0 left-0 z-20'>
				<Section3 />
			</div>
		</div>
	);
}

export default App;
