import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

export const metadata = {
  title: 'Book Matcher',
  description: 'Personalized book recommendations',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AmplifyProvider>
          {children}
        </AmplifyProvider>
      </body>
    </html>
  );
}
