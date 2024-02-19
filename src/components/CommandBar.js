import '../App.css';
import 'simple-line-icons';

export default function CommandBar({ expanded, setExpanded }) {
	return (
		<div className={expanded ? 'commandBar expanded' : 'commandBar'}>
			<div
				className='searchInput'
				onFocus={() => {
					setExpanded(true);
				}}
				onBlur={() => {
					setExpanded(false);
				}}
			>
				<input type='text' placeholder='Search for anything'></input>
				<button
					className='actionButton'
					onClick={() => {
						setExpanded(!expanded);
					}}
				>
					<span className='icon-grid' />
					⌘E
				</button>
			</div>
			{expanded && <div className='content'></div>}
		</div>
	);
}
