import Head from 'next/head';
import Link from 'next/link';

import Layout, {siteTitle} from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

import utilStyles from '../styles/utils.module.css'



export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingx1}>
        <p>
          Olá me chamo Felipe e sou apaixonado por tecnologia.
           Ajudar empresas a crescerem e consolidar sua marca na 
           internet é meu sonho.<br />
           Você pode me contatar através do meu <a href='https://felipebr.com.br'>site oficial.</a>
        </p>
        <p>
          Este é um exemplo simples de website - Se deseja aprender a usar next.js
          vá para <a href='https://nextjs.org/learn'>o tutorial next.js</a>
        </p>
      </section>
      
      <section className={`${utilStyles.headingx1} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.heading2x1}>Blog</h2>
        <ul className={utilStyles.listItem}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
