import '../App.css';
import 'simple-line-icons';
export default function CommandBar({}) {
	return (
		<div className='commandBar'>
			<div className='searchInput'>
				<input type='text' placeholder='Search for anything'></input>
			</div>
			<button className='actionButton'>
				<span className='icon-grid' />
				⌘E
			</button>
		</div>
	);
}
