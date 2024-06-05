import axios from "axios";

const apiDnd = axios.create({
	baseURL: 'https://www.dnd5eapi.co/api/'
});

export function getEnemyList() {
	const url = 'monsters/';

	return apiDnd.get(url);
};


