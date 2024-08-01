import { Layout } from "../components/layout/component";
import { Sidebar } from "../components/sidebar/component";
import { ThemeContextProvider } from "../components/theme-context/component";

export const metadata = {
  title: "Headphones app",
  description: "Web app in react course",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div id='root'>
          <ThemeContextProvider>
            <Layout sidebar={<Sidebar />}>{children}</Layout>
          </ThemeContextProvider>
        </div>
        <div id='portal' />
      </body>
    </html>
  );
}
