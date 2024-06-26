export default function Check(email: string | null | undefined) {
  const allowedEmails = [
    "dekinousyonn@gmail.com",
    "y230190@mail.ryukoku.ac.jp",
    "y220023@mail.ryukoku.ac.jp",
    "e220012@mail.ryukoku.ac.jp",
    "y220050@mail.ryukoku.ac.jp",
    "y220052@mail.ryukoku.ac.jp",
    "u220139@mail.ryukoku.ac.jp",
  ];

  return !allowedEmails.some((allowedEmail) => allowedEmail === email);
}
