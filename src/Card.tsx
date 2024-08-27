import { color, motion, useAnimate } from 'framer-motion';
import { useEffect } from 'react';
export default function Card({
	imageUrl,
	text,
	description,
}: {
	imageUrl: string;
	text: string;
	description: string;
}) {
	const [scope, animate] = useAnimate();

	const animateDiv = () => {
		animate(scope.current, {
			bottom: '2rem',
			right: '2rem',
			backgroundColor: 'white',
			color: '#3b82f6',
		});
	};
	const animateDivExit = () => {
		animate(scope.current, {
			bottom: '-4rem',
			right: '-10rem',
			backgroundColor: 'transparent',
			color: 'white',
		});
	};
	return (
		<motion.div
			onMouseEnter={animateDiv}
			onMouseLeave={animateDivExit}
			initial={{ width: '50%' }}
			whileHover={{ width: '100%' }}
			transition={{ type: 'tween' }}
			className='group relative w-full h-[80vh] bg-white rounded-3xl overflow-hidden'
		>
			<img
				src={imageUrl}
				className='absolute top-0 left-0 w-full h-full object-cover brightness-90'
			/>
			<motion.div
				ref={scope}
				initial={{
					bottom: '-4rem',
					right: '-10rem',
					backgroundColor: 'transparent',
					color: 'white',
				}}
				transition={{ type: 'tween' }}
				className='absolute text-white uppercase w-96 p-2 px-5 rounded-lg'
			>
				<p className='text-xl font-extrabold'>{text}</p>
				<motion.p className='py-3 text-sm  opacity-0 group-hover:opacity-100 transition duration-300 moderustic'>
					{description}
				</motion.p>
			</motion.div>
		</motion.div>
	);
}
