import React from 'react';
import './modalSyndicate.scss'

import { useForm } from "react-hook-form";
import ErrorText from "../errorText/ErrorText";

const ModalSyndicate = ({joinSyndicate, step, setStep}) => {

    const percent = Math.round(step / 3 * 100)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmitStep1 = (data) => {
        // alert(JSON.stringify(data))
        setStep(step + 1);
    }
    const onSubmitStep2 = (data) => {
        // alert(JSON.stringify(data))
        setStep(step + 1);
    }
    const onSubmitStep3 = (data) => {
        // alert(JSON.stringify(data))
        setStep(step + 1);
        reset();
    }

    return (
        <div style={step === 4 ? {backgroundColor: 'transparent', width: '400px', height: '186px'} : {backgroundColor: '#fff'}} className={joinSyndicate ? 'modal-box active' : "modal-box"}>

            {/*progress bar*/}
            {step <= 3 &&
                <div className="progress-bar">
                    <div style={{width: `${percent}%`}} className="progress-bar-percent"></div>
                </div>
            }

            {/*step 1*/}
            {step === 1 &&
                <form className="form" onSubmit={handleSubmit(onSubmitStep1)}>
                    <p>
                        Please note that due to regulatory compliance,
                        we cannot accept any member who does not completely
                        and accurately fill out this application form
                    </p>

                    <div className="input-boxes">
                        <input placeholder='First Name' {...register("firstName")} />
                        <input placeholder='Middle Name' {...register('middleName')} />
                        <input placeholder='Last Name' {...register('lastName')} />
                        <input type="date" placeholder='Date of Birth' {...register('dateOfBirth')} />
                        <input id="email" placeholder='Email address' {...register('email')} />
                        <input placeholder='Country code' {...register('countryCode')} />
                        <input id="phone" placeholder='Phone number' {...register('phoneNumber')} />

                        <div className="select-wrapper">
                            <select className='select' name="nationality" id="nationality">
                                <option>Nationality</option>
                                <option value="American">American</option>
                                <option value="Russian">Russian</option>
                                <option value="German">German</option>
                                <option value="Frenchman">Frenchman</option>
                            </select>
                        </div>

                        <input id="doYouDo" placeholder='What do you do' {...register('whatDoYouDo')} />
                        <input placeholder='Country of residece' {...register('countryOfResidece')} />
                        <input id="city" placeholder='City of residence' {...register('cityOfResidence')} />
                        <input placeholder='Residential addres' {...register('ResidentialAddres')} />
                        <input id="linkedin" placeholder='Linkedin profile link' {...register('linkedinProfileLink')} />
                    </div>

                    <div className="checkbox-box">
                        <div>{errors?.agree1 && <ErrorText text={errors.agree1.message}/>}</div>
                        <input className="checkbox-agree" id="agree1" type="checkbox"
                               {...register('agree1', {
                                   required: {
                                       value: true,
                                       message: "The field is required."
                                   },
                               })}
                        />
                        <label htmlFor="agree1">I agree to the <span> terms and conditions</span></label>

                    </div>

                    <div className="buttons-next-back">
                        <input className="btn-type-primary submit" type="submit" value="Next"/>
                    </div>
                </form>
            }
            {/*step 1 end*/}

            {/*step 2*/}
            {step === 2 &&
                <form className="form step-2" onSubmit={handleSubmit(onSubmitStep2)}>
                    <p>
                        Please note that due to regulatory compliance,
                        we cannot accept any member who does not completely
                        and accurately fill out this application form
                    </p>

                    {/*first radio*/}
                    <div className="form-radio">

                        <p className="title-radio-form">
                            <div>{errors?.howInvest && <ErrorText text={errors.howInvest.message}/>}</div>
                            How do you invest?</p>

                        <input
                            {...register('howInvest', {
                                required: {
                                    value: true,
                                    message: "The field is required."
                                },
                            })}
                            className="radio"
                            type="radio"
                            id="form1Choice1"
                            name="howInvest"
                            value="individual"/>
                        <label htmlFor="form1Choice1">As an individual</label>

                        <input
                            {...register('howInvest', {
                                required: {
                                    value: true,
                                    message: "The field is required."
                                },
                            })}
                            className="radio"
                            type="radio"
                            id="form1Choice2"
                            name="howInvest"
                            value="capital"/>
                        <label htmlFor="form1Choice2">I work at a venture capital firm</label>

                        <input
                            {...register('howInvest', {
                                required: {
                                    value: true,
                                    message: "The field is required."
                                },
                            })}
                            className="radio"
                            type="radio"
                            id="form1Choice3"
                            name="howInvest"
                            value="group"/>
                        <label htmlFor="form1Choice3">With a group of friends</label>

                        <input
                            {...register('howInvest', {
                                required: {
                                    value: true,
                                    message: "The field is required."
                                },
                            })}
                            className="radio"
                            type="radio"
                            id="form1Choice4"
                            name="howInvest"
                            value="other"/>
                        <label htmlFor="form1Choice4">Other</label>

                        <input className="input-work" placeholder='Where do you work?' {...register("WhereDoYouWork")} />
                    </div>

                    {/*Second radio*/}
                    <div className="form-radio">


                        <p className="title-radio-form">
                            <div>{errors?.howMuch && <ErrorText text={errors.howMuch.message}/>}</div>
                            How much are you hoping to allocate (in USD) to startups via Future Africa annually?</p>
                        <input
                            {...register('howMuch', {
                                required: {
                                    value: true,
                                    message: "The field is required."
                                },
                            })}
                            className="radio"
                            type="radio"
                            id="form2Choice1"
                            name="howMuch"
                            value="2.5-4.99"/>
                        <label htmlFor="form2Choice1">$2.500 - $4.999</label>

                        <input
                            {...register('howMuch', {
                                required: {
                                    value: true,
                                    message: "The field is required."
                                },
                            })}
                            className="radio"
                            type="radio"
                            id="form2Choice2"
                            name="howMuch"
                            value="5-9.99"/>
                        <label htmlFor="form2Choice2">$5.000 - $9.999</label>

                        <input
                            {...register('howMuch', {
                                required: {
                                    value: true,
                                    message: "The field is required."
                                },
                            })}
                            className="radio"
                            type="radio"
                            id="form2Choice3"
                            name="howMuch"
                            value="10-29.99"/>
                        <label htmlFor="form2Choice3">$10.000 - $29.999</label>

                        <input
                            {...register('howMuch', {
                                required: {
                                    value: true,
                                    message: "The field is required."
                                },
                            })}
                            className="radio"
                            type="radio"
                            id="form2Choice4"
                            name="howMuch"
                            value="30-49.99"/>
                        <label htmlFor="form2Choice4">$30.000 - $49.999</label>

                        <input
                            {...register('howMuch', {
                                required: {
                                    value: true,
                                    message: "The field is required."
                                },
                            })}
                            className="radio"
                            type="radio"
                            id="form2Choice5"
                            name="howMuch"
                            value="50-99.99"/>
                        <label htmlFor="form2Choice5">$50.000 - $99.999</label>

                        <input
                            {...register('howMuch', {
                                required: {
                                    value: true,
                                    message: "The field is required."
                                },
                            })}
                            className="radio"
                            type="radio"
                            id="form2Choice6"
                            name="howMuch"
                            value="100-150"/>
                        <label htmlFor="form2Choice6">$100.000 - $150.000</label>

                        <input
                            {...register('howMuch', {
                                required: {
                                    value: true,
                                    message: "The field is required."
                                },
                            })}
                            className="radio"
                            type="radio"
                            id="form2Choice7"
                            name="howMuch"
                            value="more150"/>
                        <label htmlFor="form2Choice7">Above $150.000</label>
                    </div>

                    <div className="buttons-next-back">
                        <input  className="btn-type-primary" type="submit" value="Next"/>
                        <button onClick={() => setStep(step - 1)} className="btn-type-secondary">Back</button>
                    </div>
                </form>
            }
            {/*step 2 end*/}

            {/*step 3*/}
            {step === 3 &&
                <form className="form" onSubmit={handleSubmit(onSubmitStep3)}>
                    <p>
                        Please note that due to regulatory compliance,
                        we cannot accept any member who does not completely
                        and accurately fill out this application form
                    </p>

                    <div className="form-radio">
                        <p className="title-radio-form">How much are you hoping to allocate (in USD) to startups via Future Africa annually?</p>

                        <input className="radio" type="radio" id="form3Choice1" name="hoping" value="10"/>
                        <label htmlFor="form3Choice1">Below $10.000</label>

                        <input className="radio" type="radio" id="form3Choice2" name="hoping" value="10-49"/>
                        <label htmlFor="form3Choice2">$10.000 - $49.000</label>

                        <input className="radio" type="radio" id="form3Choice3" name="hoping" value="50-99"/>
                        <label htmlFor="form3Choice3">$50.000 - $99.999</label>

                        <input className="radio" type="radio" id="form3Choice4" name="hoping" value="100-149"/>
                        <label htmlFor="form3Choice4">$100.000 - $149.000</label>

                        <input className="radio" type="radio" id="form3Choice5" name="hoping" value="150-199"/>
                        <label htmlFor="form3Choice5">$150.000 - $199.999</label>

                        <input className="radio" type="radio" id="form3Choice6" name="hoping" value="200-499"/>
                        <label htmlFor="form3Choice6">$200.000 - $499.000</label>

                        <input className="radio" type="radio" id="form3Choice7" name="hoping" value="500-999"/>
                        <label htmlFor="form3Choice7">$500.000 - $999.999</label>

                        <input className="radio" type="radio" id="form3Choice8" name="hoping" value="more1000"/>
                        <label htmlFor="form3Choice8">Above $1Milion</label>
                    </div>

                    <input className="input-hear-about-us" placeholder='How did you hear about us?' {...register("hearAboutUs")} />

                    <div className="checkbox-box">
                        <input className="checkbox-agree" id="agree2" type="checkbox" name="agree"
                               {...register('agree2', {
                                   required: {
                                       value: true,
                                       message: "The field is required."
                                   },
                               })}
                        />
                        <label style={{alignItems: 'start'}} htmlFor="agree2">
                            I hereby declare that the information given in this application is true and correct
                            to the best of my knowledge and belief. If any information given in this application proves
                            to be false or incorrect, agree to take responsibility for the consequences of my actions.
                        </label>
                        <div>{errors?.agree2 && <ErrorText text={errors.agree2.message}/>}</div>
                    </div>

                    <div className="buttons-next-back">
                        <input  className="btn-type-primary" type="submit" value="Next"/>
                        <button onClick={() => setStep(step - 1)} className="btn-type-secondary">Back</button>
                    </div>

                </form>
            }
            {/*step 3 end*/}

            {/* final step */}
            {step === 4 &&
                <div className="final-step">
                    <div className="success-icon-box">
                        <div className="success-icon">
                            <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.6174 5.73265L12.3107 27.0394L0.378906 15.1929L5.23691 10.4202L12.3107 17.4088L28.7596 0.959961L33.6174 5.73265Z" fill="#00975A"/>
                            </svg>
                        </div>
                    </div>
                    <div className="success-text">
                        You have successfully applied to be an investor, we will get back to you soon
                    </div>
                </div>
            }
            {/* final step end*/}
        </div>
    );
};

export default ModalSyndicate;