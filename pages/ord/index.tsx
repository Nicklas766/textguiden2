import { NextPage } from 'next';
import Layout from '../../components/Layout';
import Link from 'next/link';
import SearchBar from '../../components/SearchBar';

const WordSearch: NextPage = () => (
    <Layout title='Sök ord' description='här kan du söka bland våra ord'> 
        <h1>Information om ord</h1>
        <p>
            Här kan du slå upp ord som du använt i vårt spel ifall du vill ha mer information.
            Du hittar information om ordklasser, former och specifika saker om ordet.
        </p>
        <SearchBar />
    </Layout>
);

export default WordSearch;