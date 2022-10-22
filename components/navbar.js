import React from 'react';

const Navbar = () => {
	return (
		<div>
			<header>
				<nav className="shadow">
					<div className="flex justify-between items-center py-6 px-10 container mx-auto">
						<div>
							<h1 className="text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer">
								Adsla
							</h1>
						</div>

						<div>
							<div className="hover:cursor-pointer sm:hidden">
								<spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
								<spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
								<spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
							</div>
							<div className="flex items-center">
								<div className="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
									<h1 className="text-text-gray-600  py-2 hover:cursor-pointer hover:text-indigo-600">
										LOGIN
									</h1>
									<h1 className="text-text-gray-600  py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600 hover:shadow-lg">
										SIGNUP
									</h1>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
