import { useState } from 'react';
import ReactPlayer from 'react-player';
import VideoOverlay from './VideoOverlay';

export default function Section1() {
	const [showVideo, setShowVideo] = useState(false);
	return (
		<div className='h-screen sticky top-0 left-0 overflow-hidden  w-full z-10'>
			<style>
				{`
                .player{
                    position:relative;
                     width: 100%;
                     padding-top:56.25%;
                }
                .react-player{
                    width: calc(100vh * (16 / 9)) !important;
                }
                    
    
                `}
			</style>
			<div className='player bg-blue-50 h-full'>
				<ReactPlayer
					className='react-player absolute top-0 left-0 object-fill h-full min-w-full bg-[url("/heroPoster.jpg")] bg-cover'
					url='https://vimeo.com/723853921'
					height='100%'
					width='100%'
					playing={!showVideo}
					loop={true}
					style={{ objectFit: 'fill' }}
					config={{
						vimeo: {
							playerOptions: {
								autoplay: true,
								background: true,
								autopause: true,
							},
						},
					}}
					onReady={() => console.log('ready to play')}
					onError={() => console.log('error playing preview')}
				/>
			</div>
			{showVideo && (
				<VideoOverlay setShowVideo={setShowVideo} playing={showVideo} />
			)}
			<div
				className='w-full absolute h-screen top-0 left-0 custom blur-sm'
				onClick={() => setShowVideo((prev) => !prev)}
			></div>
			<p className='lg:text-7xl text-5xl absolute bottom-20 left-6 font-black text-white uppercase md:w-1/2 custom'>
				Shaping the future of water
			</p>
		</div>
	);
}
