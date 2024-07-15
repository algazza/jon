import React from "react";
import FormBank from "@/Components/FormBank";
import { formIdentitas } from "@/data";
import Kredit from "@/Components/Form/Kredit";
import Tabungan from "@/Components/Form/Tabungan";
import styles from "@/data/style";
import Footer from "@/Layouts/Footer";

const Home = () => {
    return (
<>
            <main className="bg-primary overflow-hidden">
                <div className={`${styles.flexCenter}`}>
                    <FormBank isiPenting={<Kredit />} context="kredit" />
                </div>
            </main>
            <Footer/>
</>
    );
};

export default Home;
