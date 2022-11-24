import { ForgotPassword } from "../components/ForgotPassword";
import { FootBar } from "../components/FootBar";
import { TitleBar } from "../components/TitleBar";

export const ForgotPasswordView = () => {
    return(
        <>
            <TitleBar />
            <ForgotPassword />
            <FootBar />
        </>
    );
}