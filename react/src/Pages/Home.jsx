import React from "react";
import styles from "../data/style"
import Footer from "../Layouts/Footer";
import FormBank from "../Components/FormBank";
import Tabungan from "../Components/Form/Tabungan"

const Home = () => {
    return (
<>
            <main className="bg-primary overflow-hidden font-jakarta">
                <div className={`${styles.flexCenter}`}>
                    <FormBank isiPenting={<Tabungan />}/>

                </div>                          
            </main>
            <Footer/>
</>
    ); 
};

export default Home;
