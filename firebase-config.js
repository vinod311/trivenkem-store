// Paste the Firebase web app configuration here. These values identify the project;
// Firestore security rules (not this file) protect the data.
export const FIREBASE_CONFIG = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT.appspot.com",
  messagingSenderId: "PASTE",
  appId: "PASTE"
};
// Replace all four placeholders with the exact email addresses for your four team members.
// All four approved members can add/edit/delete. Keep this list in sync with firestore.rules.
export const ALLOWED_EMAILS = [
  "member1@yourcompany.com",
  "member2@yourcompany.com",
  "member3@yourcompany.com",
  "member4@yourcompany.com"
];
export const ADMIN_EMAILS = ALLOWED_EMAILS;
