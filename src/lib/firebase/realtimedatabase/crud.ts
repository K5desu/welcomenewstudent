import {
  getDatabase,
  ref,
  set,
  get,
  update,
  remove,
  push,
} from "firebase/database";
import { app } from "@/lib/firebase/firebase";

export default class DatabaseOperations {
  db: ReturnType<typeof getDatabase>;

  constructor() {
    this.db = getDatabase(app);
  }

  // Create
  async createData(path: string, data: object) {
    const newRef = push(ref(this.db, path));
    await set(newRef, data);
  }

  // Read
  async readData(path: string) {
    const snapshot = await get(ref(this.db, path));
    if (snapshot.exists()) {
      console.log(snapshot.key, "=>", snapshot.val());
      return snapshot.val();
    } else {
      console.log("No data available");
    }
  }

  // Update
  async updateData(path: string, data: object) {
    await update(ref(this.db, path), data);
  }

  // Delete
  async deleteData(path: string) {
    await remove(ref(this.db, path));
  }
}
