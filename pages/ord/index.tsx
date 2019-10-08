import { NextPage } from 'next';
import Layout from '../../components/Layout';
import Link from 'next/link';
import TextWrapper from '../../components/TextWrapper';
import dynamic from 'next/dynamic';
const SearchBar = dynamic(() => import('../../components/SearchBar'));


const WordSearch: NextPage = () => (
    <Layout title='TextGuidens ordbok' description='På denna sida så erbjuder vi en ordbok. Ordboken ger dig information om hur du kan använda ord så du kan skriva fina texter.'>
        <TextWrapper>
            <h1>Hitta ordklasser, namn, synonymer och former.</h1>
            <p>
                Hej och välkommen till vår hemsida! Kul att du besöker oss. I dagsläget så jobbar vi med vårt <Link href='/spel'><a>språkverktyg</a></Link>.
                Men under tiden så erbjuder vi en ordbok, helt gratis, som ger dig information angående hur du använder svenska ord. Detta betyder att du kan 
                söka efter ord som du använt i vårt spel ifall du vill ha mer information om dem. Du hittar information om ordklasser, former och specifik information om ordet.
            </p>
            <SearchBar />
        </TextWrapper>
    </Layout>
);

export default WordSearch;