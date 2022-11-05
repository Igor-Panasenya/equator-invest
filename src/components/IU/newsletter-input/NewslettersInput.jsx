import React from 'react';
import './newsletterInput.scss';
import {useForm} from "react-hook-form";
import ErrorText from "../errorText/ErrorText";

const NewslettersInput = () => {
    const { register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = data => {
        // alert(JSON.stringify(data));
        reset();
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <article>Join Our Newsletter</article>
                <div className="input-email">
                    <input {...register("email", {
                        required: {
                            value: true,
                            message: "The field is required."
                        },
                        pattern: {
                            value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                            message: 'Invalid E-mail'
                        }, })} placeholder="Email"/>
                    {errors.email && <ErrorText text={errors.email.message}/>}
                </div>
            </label>
            <input className="footer-submit btn-type-primary" type="submit" value="Send"/>
        </form>

    );
};

export default NewslettersInput;