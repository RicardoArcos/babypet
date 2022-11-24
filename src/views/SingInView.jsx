import { FootBar } from "../components/FootBar"
import { SingIn } from "../components/SingIn"
import { TitleBar } from "../components/TitleBar"

export const SingInView = () =>{
    return(
        <>
            <TitleBar />
            <SingIn />
            <FootBar />
        </>
    );
}