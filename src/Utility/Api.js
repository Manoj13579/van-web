import { initializeApp } from "firebase/app";
import { getFirestore,
         collection,
         getDocs,
         doc,
         getDoc,
         query, 
         where } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vanweb-6ba50.firebaseapp.com",
  projectId: "vanweb-6ba50",
  storageBucket: "vanweb-6ba50.appspot.com",
  messagingSenderId: "1024774426091",
  appId: "1:1024774426091:web:076d63b6eb5cb978f15dae"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const vansCollectionRef = collection(db, "vans")
 
export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
         id: doc.id
    }))
    return(dataArr)
}
 

export async function getVan(id) {
    const docRef = doc(db, "vans", id);
    const vanSnapshot =  await getDoc(docRef);
    
        return {
            ...vanSnapshot.data(),
            id: vanSnapshot.id
        };
}


export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
         id: doc.id
    }))
    return(dataArr)
}


 
export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}