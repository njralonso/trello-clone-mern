import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		// ...
		flowbite.content(),
	],
	plugins: [
		// ...
		flowbite.plugin(),
	],
};

export default config;
