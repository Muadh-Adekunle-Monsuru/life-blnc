export default function FixedCard({
	imageUrl,
	text,
	description,
}: {
	imageUrl: string;
	text: string;
	description: string;
}) {
	return (
		<div className='relative w-full h-[40vh] bg-white rounded-3xl overflow-hidden'>
			<img
				src={imageUrl}
				className='absolute top-0 left-0 w-full h-full object-cover brightness-90'
			/>
			<div className='absolute text-white uppercase  p-2 px-5 rounded-lg'>
				<p className='text-xl font-extrabold'>{text}</p>
				<p className='py-3 text-sm  moderustic'>{description}</p>
			</div>
		</div>
	);
}
