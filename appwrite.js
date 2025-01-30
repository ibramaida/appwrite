import { Client, Databases } from "appwrite";

const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT_ID);

const databases = new Databases(client);
export { client, databases, DATABASE_ID, COLLECTION_ID };
