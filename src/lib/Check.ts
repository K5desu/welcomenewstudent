export default function Check(email: string | null | undefined) {
  const allowedEmails = [
    "dekinousyonn@gmail.com",
    "y230190@mail.ryukoku.ac.jp",
    "ryukokuhorizon.member@gmail.com",
    "y220023@mail.ryukoku.ac.jp",
    "e220012@mail.ryukoku.ac.jp",
  ];

  return !allowedEmails.some((allowedEmail) => allowedEmail === email);
}
