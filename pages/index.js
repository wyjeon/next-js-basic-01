import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const ProfileLink = props => (
  <div>
    <Link href={`/p/[profile]`} as={`/p/${props.profile}`}>
      <a>Go to {props.profile}'s profile</a>
    </Link>
  </div>
);

// http://localhost:3000/
const Index = props => (
  <Layout>
    <h1>Friends List {props.profiles[0]}</h1>
    <hr />
    {props.profiles.map((profile, index) => (
      <ProfileLink key={index} profile={profile} />
    ))}
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    profiles: data.map(profile => profile.username),
  };
};

export default Index;
