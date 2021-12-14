import axios from "axios";

export async function getUsers() {
	const res = await axios.get("https://reqres.in/api/users?page=2");
	return res.data.data;
}