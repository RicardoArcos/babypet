import { FootBar } from '../components/FootBar';
import { SearchRestults } from '../components/SearchResults';
import { TitleBar } from '../components/TitleBar';

export const SearchResultsView = () => {
    return (
        <>
            <TitleBar />
            <SearchRestults />
            <FootBar />
        </>
    );
}