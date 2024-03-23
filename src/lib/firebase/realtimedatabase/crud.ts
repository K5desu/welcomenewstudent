import { firebaseConfig } from "@/lib/firebase/firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
export default class DatabaseOperations {
  db: firebase.firestore.Firestore;
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    this.db = firebase.firestore();
  }

  // Create
  async createData(collection: string, data: object) {
    await this.db.collection(collection).add(data);
  }

  // Read
  async readData(collection: string) {
    const snapshot = await this.db.collection(collection).get();
    return snapshot.docs.map((doc) => doc.data());
  }

  // Update
  async updateData(collection: string, docId: string, data: object) {
    await this.db.collection(collection).doc(docId).update(data);
  }

  // Delete
  async deleteData(collection: string, docId: string) {
    await this.db.collection(collection).doc(docId).delete();
  }
}
