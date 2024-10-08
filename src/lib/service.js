import axios from "axios";

const getData = async (number) => {
    try {
        const users = await axios(`https://jsonplaceholder.typicode.com/users/${number}`);
        console.log(users.data); // Sadece veriyi yazdır
    } catch (error) {
        console.error("Veri alma hatası:", error);
    }
}

export default getData;
