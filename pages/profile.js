import Router from 'next/dist/next-server/server/router';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

// http://localhost:3000/profile
export default function Profile() {
  const router = useRouter();
  return (
    <Layout>
      <h2>Profile Page</h2>
      <p>Hello! {router.query.name}</p>
    </Layout>
  );
}
