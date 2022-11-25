import { FootBar } from "../components/FootBar";
import { TitleBar } from "../components/TitleBar";
import { Transaction } from "../components/Transaction";

export const TransactionCorrectView = () => {
    return (
        <>
            <TitleBar />
            <Transaction />
            <FootBar />
        </>
    );
}