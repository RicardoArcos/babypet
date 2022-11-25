import { Article } from "../components/Article";
import { FootBar } from "../components/FootBar";
import { TitleBar } from "../components/TitleBar";

export const ArticleView = () => {
    return (
        <>
            <TitleBar />
            <Article />
            <FootBar />
        </>
    );
}