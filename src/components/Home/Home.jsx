import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <>
            <Header></Header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Home;