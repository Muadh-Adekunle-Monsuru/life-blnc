export default function Section3() {
	return (
		<div className='min-h-screen bg-[#F0F5F7] w-full rounded-[4rem] z-20 p-5 sticky flex flex-col lg:flex-row mb-[200px]'>
			<div className='lg:w-1/2 text-blue-600 lg:p-5'>
				<p className='text-4xl font-extrabold pt-5'>Global Delivery</p>
				<p className='lg:pt-40 pt-10 text-lg moderustic lg:w-2/3'>
					LIFEBLNC’s fleet is capable of transporting substantial volumes per
					route, while ensuring the water is safely preserved throughout the
					journey.
				</p>
				<p className='text-lg moderustic pt-10 lg:w-2/3'>
					As we scale our business and expand our network of water sources
					across various geographic locations, we will be able to reach our
					customers more efficiently, even in the most remote parts of the
					world.
				</p>
			</div>
			<div className='lg:w-1/2 p-5'>
				<img src='/earth.png' className='w-full h-full object-contain' />
			</div>
		</div>
	);
}
