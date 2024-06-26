import serverConfig from '../server-config';
import axios from 'axios';

// databaseCollection: 'footer' | 'header' | 'mainSite' | 'subjects'
async function databaseCommunication(databaseCollection) {
    const requestUrl = `${serverConfig["server-url"]}${serverConfig["endpoints"][databaseCollection]}`;
    
    try {    
        const response = await axios.get(requestUrl);
        return response.data;
    } catch (error) {
        console.error(`Error occured when connecting to ${requestUrl} database, requesting collection ${databaseCollection}:${serverConfig["endpoints"][databaseCollection]}`)
        throw error;
    }
}

export default databaseCommunication;