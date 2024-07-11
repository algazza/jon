import React from "react";
import styles from "../data/style";
import { Title } from "@/data/user";
import { formIdentitas } from "@/data";

const FormBank = ({isiPenting}) => {
    return (
        <section className="grid my-12 mx-auto gap-12">
            <div className="">
                <h2 className={`${styles.heading2} mb-8 `}>Identitas</h2>

                <form action="" className="grid gap-4 layout">
                    <div className="grid justify-center w-full sm:grid-cols-2 gap-4">
                      {formIdentitas.map((iden)=>(
                        <div key={iden.id} className={`${styles.inputSpan}`}>
                            <span>{iden.title}</span>
                            <input
                                required
                                type={iden.type}
                                placeholder={iden.title}
                                class="input input-primary input-bordered w-full max-w-xs"
                                name={iden.id}                            
                            />
                        </div>
                      ))}
                    </div>
                    

                    <div className="form-control bg-abuTerang p-6 border border-black rounded-md md:col-[2/3] md:row-[1/3]">
                        <h1 className="">Pekerjaan</h1>
                        <form className="" required>
                            <label className="justify-start gap-4 label cursor-pointer">
                                <input
                                    type="radio"
                                    name="radio-1"
                                    class="radio"
                                />
                                <span className="label-text">Remember me</span>
                            </label>
                            <label className="justify-start gap-4 label cursor-pointer">
                                <input
                                    type="radio"
                                    name="radio-1"
                                    class="radio"
                                />
                                <span className="label-text">Remember me</span>
                            </label>
                            <label className="justify-start gap-4 label cursor-pointer">
                                <input
                                    type="radio"
                                    name="radio-1"
                                    class="radio"
                                />
                                <span className="label-text">Remember me</span>
                            </label>
                            <label className="justify-start gap-4 label cursor-pointer">
                                <input
                                    type="radio"
                                    name="radio-1"
                                    class="radio"
                                />
                                <span className="label-text">Remember me</span>
                            </label>
                        </form>
                    </div>

                    <div className={`${styles.inputSpan}`}>
                        <span>Alamat</span>
                        <textarea
                            required
                            className="textarea textarea-bordered"
                            placeholder="Alamat"
                        ></textarea>
                    </div>
                </form>
            </div>

            {isiPenting}
        </section>
    );
};

export default FormBank;
