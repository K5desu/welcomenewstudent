// databaseOperations.js
import { getDatabase, ref, set, get, update, remove } from "firebase/database";
import { app } from "@/lib/firebase/firebase";

const db = getDatabase(app);

// Create
// Create
export const createData = async (path: string, data: object) => {
  await set(ref(db, path), data);
};

// Read
export const readData = async (path: string) => {
  const snapshot = await get(ref(db, path));
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    console.log("No data available");
  }
};

// Update
export const updateData = async (path: string, data: object) => {
  await update(ref(db, path), data);
};

// Delete
export const deleteData = async (path: string) => {
  await remove(ref(db, path));
};
