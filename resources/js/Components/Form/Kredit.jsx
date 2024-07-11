import { formSelectKredit } from "@/data";
import styles from "@/data/style";
import React from "react";

const Kredit = () => {
    return (
        <div className="">
            <h2 className={`${styles.heading2} mb-2`}>Pengajuan</h2>
            <form action="" className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
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
                            <span class="badge">,00</span>
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
                                ): (
                                    ""
                                )}
                            </select>
                        </div>
                    ))}
                </div>

                <div className="form-control bg-abuTerang p-6 border border-black rounded-md">
                    <h1 className="">Pekerjaan</h1>
                    <form className="" required>
                        <label className="justify-start gap-4 label cursor-pointer">
                            <input type="radio" name="radio-1" class="radio" />
                            <span className="label-text">Remember me</span>
                        </label>
                        <label className="justify-start gap-4 label cursor-pointer">
                            <input type="radio" name="radio-1" class="radio" />
                            <span className="label-text">Remember me</span>
                        </label>
                        <label className="justify-start gap-4 label cursor-pointer">
                            <input type="radio" name="radio-1" class="radio" />
                            <span className="label-text">Remember me</span>
                        </label>
                        <label className="justify-start gap-4 label cursor-pointer">
                            <input type="radio" name="radio-1" class="radio" />
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
    );
};

export default Kredit;
