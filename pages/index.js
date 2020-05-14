import Head from 'next/head';
import Link from "next/link";

const Home = ({ list }) => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Tananã</h1>
        <hr />
        <ul>
          {list.map(i => (
            <li key={i.id}>
              <Link as={`/${i.name}/${i.car}/detail`} href="/[person]/[car]/detail">
                <span>{i.name}'s {i.car}</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

Home.getInitialProps = () => {
  return { list: [{ id: 1, name: 'Felipe', car: 'Honda' }, { id: 2, name: 'Adolph', car: 'Escort' }] };
}

export default Home;