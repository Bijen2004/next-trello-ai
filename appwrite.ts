import { Client,Account,ID,Databases,Storage } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJEXT_ID!);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export {client,account,databases,storage,ID};