import React from 'react';
import './newsletterInput.scss';
import {useForm} from "react-hook-form";

const NewslettersInput = () => {
    const { register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = data => {
        alert(JSON.stringify(data));
        reset();
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <article>Join Our Newsletter</article>
                <div className="input-email">
                    <input {...register("email", { required: true, pattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu })} placeholder="Email"/>
                    {errors.email && <p className="text-error">*Error</p>}
                </div>
            </label>
            <input className="submit btn-type-primary" type="submit" value="send"/>
        </form>

    );
};

export default NewslettersInput;