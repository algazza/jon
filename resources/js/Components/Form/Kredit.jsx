import { formPenghasilan, formSelectKredit } from "@/data";
import styles from "@/data/style";
import React from "react";

const Kredit = () => {
    return (
        <div className="">
            <h2 className={`${styles.heading2} mb-2`}>Pengajuan</h2>

            <div
                action=""
                className="grid justify-center gap-4 mx-auto md:grid-cols-x2500"
            >
                <div className="grid w-full sm:grid-cols-2 gap-4">
                    <div className={`${styles.inputSpan}`}>
                        <span>Jumlah Pinjaman</span>
                        <label class="input input-primary input-bordered flex items-center gap-2 outline-none">
                            Rp.
                            <input
                                required
                                type="number"
                                class="grow border-none "
                                placeholder="xxx.xxx.xxx"
                            />
                        </label>
                    </div>
                    {formSelectKredit.map((selek) => (
                        <div key={selek.id} className={`${styles.inputSpan}`}>
                            <span>{selek.title}</span>
                            <select class="select select-bordered w-full max-w-xs">
                                <option disabled selected>
                                    {selek.placeholder}
                                </option>
                                <option>{selek.option1}</option>
                                <option>{selek.option2}</option>
                                {selek.option3 ? (
                                    <option>{selek.option3}</option>
                                ) : (
                                    ""
                                )}
                            </select>
                        </div>
                    ))}
                </div>

                <div className=" md:col-[2/3] md:row-[1/3]">
                    <div className={`${styles.inputSpan} mb-4`}>
                        <span>Bunga/Tahun</span>
                        <select class="select select-bordered w-full max-w-xs">
                            <option disabled selected>
                                Pilih Bunga Pertahunnya
                            </option>
                            <option>35%</option>
                            <option>50%</option>
                            <option>100%</option>
                        </select>
                    </div>

                    <div className="form-control bg-abuTerang p-6 border border-black rounded-md min-w-[90px]">
                        <h1 className="">Penghasilan Perbulan</h1>
                        <form className="" required>
                            {formPenghasilan.map((gaji) => (
                                <label
                                    key={gaji.id}
                                    className="justify-start gap-4 label cursor-pointer"
                                >
                                    <input
                                        type="radio"
                                        name="radio-1"
                                        class="radio"
                                    />
                                    <span className="label-text">
                                        {gaji.title}
                                    </span>
                                </label>
                            ))}
                        </form>
                    </div>
                </div>

                <div className={`${styles.inputSpan}`}>
                    <span>Catatan</span>
                    <textarea
                        required
                        className="textarea textarea-bordered"
                        placeholder="Catatan"
                    ></textarea>
                    <p className={`${styles.fontCaption} mt-2`}>
                        Mohon mengisi di CATATAN kalo memang ada Informasi Awal
                        yang perlu disampaikan kepada kami. Terima kasih telah
                        memberikan kepercayaan kepada BPR ARTO MORO Semarang,
                        kami akan segera menghubungi melalui No. Handphone Anda.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Kredit;
