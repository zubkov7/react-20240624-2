export const metadata = {
  title: "Headphones app",
  description: "Web app in react course",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div id='root'>{children}</div>
      </body>
    </html>
  );
}
