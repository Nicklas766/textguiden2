import { NextPage } from 'next';
import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const LinkToAbbreviation: React.FunctionComponent<{id: string}> = props => (
    <li>
      <Link href="/hur-forkortas/[abbreviation]" as={`/hur-forkortas/${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </li>
);

const AbbreviationHome: NextPage<{ abbreviations: [] }> = ({ abbreviations }) => (

    <Layout title='Svenska förkortningar'
            description='I Sverige så har vi många förkortningar, här får du reda på många av dem.'>

        <h1>Svenska förkortningar</h1>
        <p>Hur förkortas egentligen svenska ord? Här har vi skapat en lista för att göra det enklare att hitta förkortningar.</p>

        <h2>Lista över svenska förkortningar:</h2>

        <ul>
            {abbreviations.map(abbreviation => <LinkToAbbreviation key={abbreviation} id={abbreviation} />)}
        </ul>

    </Layout>
);

AbbreviationHome.getInitialProps = async function() {
  const res = await fetch(`http://localhost:3001/abbreviations`);
  const abbreviations = await res.json();

  return { abbreviations };
};

export default AbbreviationHome;
