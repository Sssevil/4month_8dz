import './App.css';
import ModalProvider from "./context/ModalProvider";
import AboutPage from "./pages/aboutPage/AboutPage";
import MainPage from "./pages/mainPage/MainPage";
import UsersPage from "./pages/usersPage/UsersPage";
function App() {


    return (
        <div>
            <ModalProvider>
                <AboutPage/>
                ============
                <MainPage/>
            </ModalProvider>

            <UsersPage/>
        </div>
    );
}

export default App;
