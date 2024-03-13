import "../styles/main.scss";

export const metadata = {
  title: "QuillAudits",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
