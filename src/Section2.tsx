import Card from './Card';
export default function Section2() {
	return (
		<div className='min-h-screen bg-blue-700 w-full rounded-t-[4rem] sticky top-0 left-0 z-10 -mt-16 p-5'>
			<div className='text-white p-10'>
				<p className='uppercase font-extrabold'>who is lifeblnc</p>
				<p className='text-2xl w-2/3 pt-4 moderustic'>
					We are the first large-scale global exporter of high-quality water in
					bulk shipments.
				</p>
			</div>
			<div className='flex gap-2 items-center justify-center px-5'>
				<Card
					imageUrl='https://images.unsplash.com/photo-1499988921418-b7df40ff03f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					text='The Problem'
					description='Fresh Drinking water is a scares resource. learn more about this global issue. '
				/>
				<Card
					description=' learn more about our solution to mitigate water scarcity'
					imageUrl='https://plus.unsplash.com/premium_photo-1661963620419-32e7be221e59?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					text='Our Solution'
				/>
			</div>
			<div className='p-72'></div>
		</div>
	);
}
