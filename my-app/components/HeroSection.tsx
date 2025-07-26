"use client";
import * as motion from "motion/react-client";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

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
							<p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
								Insight on tech,design,and creativity from a
								digital craftsman who believes in the power of
								thoughtful storytelling.
							</p>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
							>
								<Button size={"lg"} className="group">
									Read the Latest Post
									<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Button>
							</motion.div>
						</motion.div>
						{/* Right Side Content*/}
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="hidden lg:block"
						>
							<div className="relative">
								<div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl -top-10 -right-10"></div>
								<div className="w-96 h-96 bg-gradient-to-tl from-secondary/30 to-primary/30 rounded-2xl transform rotate-6 shadow-2xl"></div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
}
