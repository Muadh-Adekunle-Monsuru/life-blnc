import ReactPlayer from 'react-player';

export default function VideoOverlay() {
	return (
		<div className='bg-black/80 flex items-center justify-center w-full h-full absolute top-0 left-0 z-10 cursor-auto'>
			<ReactPlayer
				url='https://vimeo.com/723853921'
				width='90%'
				height='90%'
				controls
			/>
		</div>
	);
}
