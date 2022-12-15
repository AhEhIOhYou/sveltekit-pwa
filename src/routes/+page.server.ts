import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const title = "Main Page";
	const description = "Main Page Description";

	const items = [
		{
			img: 'https://picsum.photos/250/320',
			text: 'JoJo\'s Bizarre Adventure: Diamond is Unbreakable'
		},
		{
			img: 'https://picsum.photos/250/320',
			text: 'JoJo\'s Bizarre Adventure: Diamond is Unbreakable'
		},
		{
			img: 'https://picsum.photos/250/320',
			text: 'JoJo\'s Bizarre Adventure: Diamond is Unbreakable'
		},
		{
			img: 'https://picsum.photos/250/320',
			text: 'JoJo\'s Bizarre Adventure: Diamond is Unbreakable'
		},
		{
			img: 'https://picsum.photos/250/320',
			text: 'JoJo\'s Bizarre Adventure: Diamond is Unbreakable'
		},
		{
			img: 'https://picsum.photos/250/320',
			text: 'JoJo\'s Bizarre Adventure: Diamond is Unbreakable'
		},
		{
			img: 'https://picsum.photos/250/320',
			text: 'JoJo\'s Bizarre Adventure: Diamond is Unbreakable'
		}
	];
	return { title, description, items };
};