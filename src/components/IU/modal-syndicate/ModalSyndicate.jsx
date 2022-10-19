import React from 'react';
import './modalSyndicate.scss'
import {useState} from "react";

const ModalSyndicate = ({joinSyndicate}) => {

    const [step, setStep] = useState(1)
    const percent = Math.round(step / 3 * 100)

    return (
        <div className={joinSyndicate ? "modal-box active" : "modal-box"}>

            {/*step 1*/}
            {step === 1 &&
                <div className="step-1">
                    <p>
                        Please note that due to regulatory compliance,
                        we cannot accept any member who does not completely
                        and accurately fill out this application form
                    </p>
                    <h2>STEP 1</h2>
                </div>
            }
            {/*step 1 end*/}

            {/*step 2*/}
            {step === 2 &&
                <div className="step-2">
                    <p>
                        Please note that due to regulatory compliance,
                        we cannot accept any member who does not completely
                        and accurately fill out this application form
                    </p>
                    <h2>STEP 2</h2>
                </div>
            }
            {/*step 2 end*/}

            {/*step 3*/}
            {step === 3 &&
                <div className="step-3">
                    <p>
                        Please note that due to regulatory compliance,
                        we cannot accept any member who does not completely
                        and accurately fill out this application form
                    </p>
                    <h2>STEP 3</h2>
                </div>
            }
            {/*step 3 end*/}

            <div className="modal-progress-box">
                <div className="progress-bar">
                    <div style={{width: `${percent}%`}} className="progress-bar-percent"></div>
                </div>

                <div className="buttons-next-back">
                    <button onClick={() => setStep(step + 1)} className="btn-type-primary">
                        {step == 3 ? 'Submit' : 'Next'}
                    </button>
                    {step > 1 &&
                        <button onClick={() => setStep(step - 1)} className="btn-type-secondary">Back</button>
                    }
                </div>
            </div>

        </div>
    );
};

export default ModalSyndicate;