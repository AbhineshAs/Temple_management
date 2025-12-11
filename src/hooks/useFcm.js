import { useEffect } from "react";
import { getFcmToken } from "../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

// Put your VAPID key here (Firebase Console -> Project Settings -> Cloud Messaging -> Web Push)
const VAPID_KEY = "BKs_iHEVmcVilu61B7v9W_fe4JLVV119LWlaXO_AwVXByTKlDqLX4ToR_xYQRKarCmcTObIIVg3z4RTbC-0abUc";

export default function useFcm(isAdmin = false) {
  useEffect(() => {
    if (!isAdmin) return;
    async function register(){
      const perm = await Notification.requestPermission();
      if (perm !== "granted") return;
      const token = await getFcmToken(VAPID_KEY);
      if (!token) return;
      const snap = await getDocs(collection(db, "adminTokens"));
      const exists = snap.docs.some(d => d.data().token === token);
      if (!exists) await addDoc(collection(db, "adminTokens"), { token, createdAt: new Date() });
      console.log("FCM token saved");
    }
    register();
  }, [isAdmin]);
}
