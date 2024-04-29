const axios = require('axios');
const mapArrToStrings = require('../mapArrToStrings/mapArrToStrings');

const getData = async () => {
    try {
        const response = await axios.getAdapter('https://jsonplaceholder.typicode.com/users');
        const userIds = response.data.map((user) => user.id);

        return mapArrToStrings(userIds);
    } catch (error) {
        return error;
    }
};
module.exports = getData;
