import { useState } from 'react';
import ReactPlayer from 'react-player';
import VideoOverlay from './VideoOverlay';

export default function Section1() {
	const [showVideo, setShowVideo] = useState(false);
	return (
		<div className='h-screen player-wrapper relative overflow-hidden w-full'>
			<ReactPlayer
				className='react-player'
				url='https://vimeo.com/723853921'
				width='100%'
				height='100%'
				playing={!showVideo}
				config={{
					vimeo: {
						playerOptions: {
							autoplay: true,
							background: true,
							autopause: true,
						},
					},
				}}
			/>
			{showVideo && <VideoOverlay />}
			<div
				className='w-full absolute h-screen top-0 left-0 custom'
				onClick={() => setShowVideo((prev) => !prev)}
			></div>
		</div>
	);
}
