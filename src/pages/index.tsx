import { type NextPage } from 'next';
import Head from 'next/head';
import HomePage from '../components/pages/home';

const Index: NextPage = () => {
    return (
        <>
            <Head>
                <title>PeopleEat</title>
                <meta name="description" content="PeopleEat - a platform to find private chefs / cooks" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomePage />
        </>
    );
};

export default Index;
