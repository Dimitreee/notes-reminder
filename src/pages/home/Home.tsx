import * as React from 'react';

import NoteList from 'src/containers/NoteList';
import NoteForm from 'src/modules/NoteForm';
import Layout from 'src/components/Layout'


interface IHomePageOwnProps {}

const HomePage: React.FC<IHomePageOwnProps> = () => (
    <Layout>
        <NoteList/>
        <NoteForm/>
    </Layout>
);

export default HomePage
