import * as React from 'react';
import NoteList from 'src/containers/NoteList';

import NoteForm from 'src/modules/NoteForm';

import Layout from 'src/components/Layout'
import Box, { BoxPosition } from 'src/components/Box';


interface IHomePageOwnProps {}

const HomePage: React.FC<IHomePageOwnProps> = () => (
    <Layout>
        <Box position={BoxPosition.CENTER}>
            <NoteList/>
            <Box>
                <NoteForm/>
            </Box>
        </Box>
    </Layout>
);

export default HomePage
