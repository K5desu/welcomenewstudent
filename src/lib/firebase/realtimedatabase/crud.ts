import { getDatabase, ref, set, get, update, remove } from "firebase/database";
import { app } from "@/lib/firebase/firebase";

export default class DatabaseOperations {
  db: ReturnType<typeof getDatabase>;

  constructor() {
    this.db = getDatabase(app);
  }

  // Create
  async createData(path: string, data: object) {
    await set(ref(this.db, path), data);
  }

  // Read
  async readData(path: string) {
    const snapshot = await get(ref(this.db, path));
    if (snapshot.exists()) {
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
