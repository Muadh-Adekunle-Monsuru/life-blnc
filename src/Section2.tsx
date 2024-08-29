import Card from './Card';
import FixedCard from './FixedCard';
export default function Section2() {
	return (
		<div className='min-h-screen bg-blue-700 w-full rounded-t-[4rem] z-10 -mt-16 pb-16 p-5 sticky top-0 '>
			<div className='text-white p-4 md:p-10'>
				<p className='uppercase font-extrabold'>who is lifeblnc</p>
				<p className='text-lg md:w-2/3 pt-4 moderustic'>
					We are the first large-scale global exporter of high-quality water in
					bulk shipments.
				</p>
			</div>
			<div className='lg:flex flex-col md:flex-row gap-2 items-center justify-center px-5 pb-20 hidden '>
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
			<div className='lg:hidden flex-col md:flex-row gap-2 items-center justify-center px-5 pb-20 flex'>
				<FixedCard
					imageUrl='https://images.unsplash.com/photo-1499988921418-b7df40ff03f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					text='The Problem'
					description='Fresh Drinking water is a scares resource. learn more about this global issue. '
				/>
				<FixedCard
					description=' learn more about our solution to mitigate water scarcity'
					imageUrl='https://plus.unsplash.com/premium_photo-1661963620419-32e7be221e59?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					text='Our Solution'
				/>
			</div>
		</div>
	);
}
