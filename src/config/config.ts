// This created the server objedct which includes HOSTNAME and PORT
// For testing we will use port 1338
import dotenv from 'dotenv';

dotenv.config();
const SERVER_HOSTNAME = process.env.HOSTNAME || `localhost`;
const SERVER_PORT = process.env.SERVER_PORT || 1338;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT

}

const config = {
    server: SERVER
}
export default config