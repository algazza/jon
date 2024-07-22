import Kredit from "@/Components/Form/Kredit";
import FormBank from "@/Components/FormBank";
import styles from "@/data/style";
import React from "react";

const KreditPage = () => {
    return (
        <section>
            <div className={`${styles.flexCenter}`}>
                <FormBank
                    isiPenting={<Kredit />}
                    value={"Kredit"}
                    routes={"{{route('kredit.submit')}}"}
                />
            </div>
        </section>
    );
};

export default KreditPage;
