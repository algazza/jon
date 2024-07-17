import React from "react";
import styles from "../data/style";
import { Title } from "@/data/user";
import { formIdentitas, formPekerjaan } from "@/data";

const FormBank = ({ isiPenting, value }) => {
    return (
        <section className={`${styles.fontBody}`}>
            <form className="grid my-12 gap-12">
                <div className="">
                    <h2 className={`${styles.heading3} mb-4 `}>Identitas</h2>

                    <div
                        action=""
                        className="grid gap-4 mx-auto  md:grid-cols-x2500"
                    >
                        <div className="grid sm:justify-center w-full sm:grid-cols-2 gap-4">
                            {formIdentitas.map((iden) => (
                                <div
                                    key={iden.id}
                                    className={`${styles.inputSpan}`}
                                >
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
                                {formPekerjaan.map((kerja) => (
                                    <label
                                        key={kerja.id}
                                        className="justify-start gap-4 label cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name="radio-1"
                                            class="radio"
                                        />
                                        <span className="label-text">
                                            {kerja.title}
                                        </span>
                                    </label>
                                ))}
                                <label className="justify-start gap-4 label cursor-pointer">
                                    <input
                                        type="radio"
                                        name="radio-1"
                                        class="radio"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Lainnya"
                                        className="input input-ghost w-full max-w-xs"
                                        // onClick={checked = true}
                                    />
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
                    </div>
                </div>

                {isiPenting}

                <div>
                    <div className="form-control gap-2">
                        <label className="label cursor-pointer justify-start gap-4">
                            <input type="checkbox" className="checkbox" />
                            <span className={`${styles.fontBody} label-text`}>
                                Dengan ini saya menyetujui penggunaan data
                                diatas untuk pengajuan kredit melalui BPR Arto
                                Moro.
                            </span>
                        </label>
                        <span>* Pengajuan melalui website ini gratis</span>
                        <span>* Proses analisa dan persetujuan dilakukan bank penyalur KUR</span>
                        <span>* Pastikan no. HP Anda sudah benar dan aktif. Pastikan alamat usaha Anda sudah benar</span>
                    </div>

                </div>

                <input type="hidden" name="_action" value={value} />
                <button className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group">
                    Hover me!
                    <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                    <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                    <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                    <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                        Explore!
                    </span>
                </button>
            </form>
        </section>
    );
};

export default FormBank;
