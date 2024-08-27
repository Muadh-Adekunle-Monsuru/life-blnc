import ReactPlayer from 'react-player';
import Cancle from './Cancle';

export default function VideoOverlay({
	setShowVideo,
	playing,
}: {
	setShowVideo: any;
	playing: boolean;
}) {
	return (
		<div
			className='bg-black/80 flex items-center justify-center w-full h-full absolute top-0 left-0 z-[99999] cursor-auto select-none'
			onClick={() => console.log('clicked')}
		>
			<div
				className='absolute top-2 right-2 cursor-pointer'
				onClick={() => setShowVideo(false)}
			>
				<Cancle />
			</div>
			<ReactPlayer
				className='z-[99999]'
				url='https://vimeo.com/723853921'
				width='100%'
				height='90%'
				controls
				playing={playing}
				config={{
					vimeo: {
						playerOptions: {
							fullscreen: true,
						},
					},
				}}
			/>
		</div>
	);
}
