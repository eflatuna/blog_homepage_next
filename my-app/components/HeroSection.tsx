"use client";
import * as motion from "motion/react-client";
export default function HeroSection() {
	return (
		<div>
			<section className="min-h-[90vh] flex items-center px-4 sm:px-5 lg:px-8 overflow-hidden">
				<div className="max-w-7xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Left Side Content*/}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							<h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-6">
								Writing That{" "}
								<span className="text-primary italic">
									Resonates
								</span>
							</h1>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
}
