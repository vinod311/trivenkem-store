# Trivenkem Store App — private team setup

## Important security notes
- This version requires email/password sign-in. Anonymous sign-in is not used.
- Only the four emails in `firebase-config.js` and `firestore.rules` can read company records.
- All four approved emails can read and add/edit/delete company records.
- The original product list was intentionally removed from the front-end source. Do not paste company/customer/product data into public source code.
- No app can promise “zero glitches forever.” Back up data regularly and test changes before using them for daily office work.

## 1. Keep the GitHub repository private
1. GitHub → New repository → name it `trivenkem-store`.
2. Choose **Private**. Do not upload company data, backups, passwords, service-account keys, or `.env` secrets.
3. Upload the contents of this folder (not the ZIP itself) to the repository.
4. In GitHub, check Settings → General → Danger Zone/Change visibility to confirm the repository is Private.

## 2. Create Firebase database
1. Open https://console.firebase.google.com/ and create a project.
2. Authentication → Sign-in method → enable **Email/Password** only. Do not enable Anonymous.
3. Authentication → Users → Add user: create accounts for all four team members, each with a unique email and strong password. Do not share one login.
4. Firestore Database → Create database → choose a nearby region, such as Mumbai (`asia-south1`) if suitable for your organisation.
5. Firestore → Rules: paste `firestore.rules`, replace all four sample emails with the exact team emails, and ensure the four team emails are exact and matching. All four listed members have read/write/delete access. Publish.
6. Project settings → Your apps → add a Web app and copy the Firebase config into `firebase-config.js`.
7. Replace the sample emails in `firebase-config.js` too. The two email lists must match the rules exactly.

## 3. Hosting
You can host the static app on GitHub Pages, but treat the website URL as public unless your GitHub plan/org explicitly provides access-controlled Pages. This app is designed so company records require an approved login even if someone knows the URL. Do not put real company data into the source files. Use HTTPS hosting only.
For a simple alternative, deploy the folder to Netlify. Add the exact deployed domain to Firebase Authentication → Settings → Authorized domains.

## 4. First login and data
1. Open the deployed HTTPS app and sign in with an approved email/password.
2. The database starts empty. Use the app's **Data & backup → Restore** to restore a valid JSON backup from your old app, if you have one. Otherwise add/import records using the app. The original embedded seed data is not included in this security-focused version.
3. Test from each of the four accounts. An unapproved account must not be able to read data; all four approved accounts must be able to edit, and an unapproved account must not be able to read or write.
4. Keep an encrypted/offline backup in a company-approved location. Do not post backup JSON in GitHub or send it in public chats.

## 5. Reliability checklist
- Test add/edit/delete and verify changes appear on all four devices.
- Make a dated backup at least weekly and before any update.
- Keep Firebase billing/usage alerts enabled and review Firestore usage.
- Keep a record of who is an admin. Remove access promptly when a staff member leaves.
- After updating files, test on one device first, then roll out to the other three.
- Firebase web config is not a password; Firestore rules and Authentication are what protect records. Never publish service-account/private keys.

## Troubleshooting
- `permission-denied`: email not in the rules, rules/config lists do not match, or the account is not signed in.
- Login failure: confirm Email/Password is enabled and that the account exists in Firebase Authentication.
- Empty database: restore a backup or add records; this version does not ship the old product list in source.
