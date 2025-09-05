import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-[50vh] w-full flex items-center justify-center bg-white text-black font-montserrat p-8">
			<div className="text-center">
				<h1 className="text-3xl md:text-5xl font-semibold">Page not found</h1>
				<p className="mt-4 text-lg md:text-2xl">The page you&apos;re looking for doesn&apos;t exist.</p>
				<Link href="/" className="inline-block mt-8 text-[#16469D] underline text-lg md:text-2xl">Go back home</Link>
			</div>
		</div>
	);
}


