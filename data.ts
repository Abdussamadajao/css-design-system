import { ICrew, IDestination, IDot, INav } from './type';

export const destinations: IDestination[] = [
	{
		name: 'Moon',
		images: './assets/destination/image-moon.png',
		description:
			'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
		distance: '384,400 km',
		travel: '3 days',
		category: ['Moon'],
	},
	{
		name: 'Mars',
		images: './assets/destination/image-mars.png',
		description:
			'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
		distance: '225 mil. km',
		travel: '9 months',
		category: ['Mars'],
	},
	{
		name: 'Europa',
		images: './assets/destination/image-europa.png',

		description:
			'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
		distance: '628 mil. km',
		travel: '3 years',
		category: ['Europa'],
	},
	{
		name: 'Titan',
		images: './assets/destination/image-titan.png',

		description:
			'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
		distance: '1.6 bil. km',
		travel: '7 years',
		category: ['Titan'],
	},
];

export const crews: ICrew[] = [
	{
		name: 'Douglas Hurley',
		images: './assets/crew/image-douglas-hurley.png',
		role: 'Commander',
		bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
	},
	{
		name: 'Mark Shuttleworth',
		images: './assets/crew/image-mark-shuttleworth.png',
		role: 'Mission Specialist',
		bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
	},
	{
		name: 'Victor Glover',
		images: './assets/crew/image-victor-glover.png',

		role: 'Pilot',
		bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
	},
	{
		name: 'Anousheh Ansari',
		images: './assets/crew/image-anousheh-ansari.png',
		role: 'Flight Engineer',
		bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
	},
];

export const navigation: INav[] = [
	{
		title: 'Home',
		route: '/',
		number: '00',
	},
	{
		title: 'Destination',
		route: '/destination',
		number: '01',
	},
	{
		title: 'Crew',
		route: '/crew',
		number: '02',
	},
	{
		title: 'Technology',
		route: '/technology',
		number: '03',
	},
];


