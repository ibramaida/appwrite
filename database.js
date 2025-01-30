import { client, databases, DATABASE_ID, COLLECTION_ID } from "./appwrite";
import { ID } from "appwrite";

const collections = [
  {
    databaseId: DATABASE_ID,
    id: COLLECTION_ID,
    name: "trendingMovies",
  },
];

const db = {};

collections.forEach((col) => {
  db[col.name] = {
    create: (payload, id = ID.unique(), permissions) =>
      databases.createDocument(
        col.databaseId,
        col.id,
        id,
        payload,
        permissions
      ),
    update: (id) =>
      databases.updateDocument(col.databaseId, col.id, id, payload),
    get: (id) => databases.getDocument(col.databaseId, col.id, id),
    list: (queries) => databases.listDocuments(col.databaseId, col.id, queries),
    delete: (id) => databases.deleteDocument(col.databaseId, col.id, id),
  };
});

export { db };
