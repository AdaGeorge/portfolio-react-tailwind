import React from "react";
import { useForm } from "react-hook-form";
import ButtonSecondary from "./buttons/ButtonSecondary";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const defaultValues = {
    name: '',
    email: '',
    message: ''
  }

  const submit = (data) => {
    window.location = `mailto:adageorge79@gmail.com?subject=${data.name} ${data.email}&body=${data.message}`
    reset(defaultValues)
  };


  return (
    <article className="bg-p-clear py-6 ">
      <div className="px-2">

      <h3 className="text-center text-4xl text-p-dark py-12">Contact Me</h3>
      <form
        className="grid gap-7 justify-center"
        onSubmit={handleSubmit(submit)}
        >
        <div>
          <input
            className="text-p-dark w-screen max-w-screen-md p-2 rounded-sm outline-none focus:border-solid focus:border-m-clear focus:border-2"
            type="text"
            placeholder="Name"
            size="30"
            {...register("name", { required: true, maxLength: 30 })}
            />
          {errors.name?.type === "required" && (
            <p className="text-red font-bold text-sm" role="alert">
              Name is required
            </p>
          )}
          {errors.name?.type === "maxLength" && (
            <p className="text-red font-bold text-sm" role="alert">
              Name has to be shorter than 30 carachters
            </p>
          )}
        </div>
        <div>
          <input
            className="text-p-dark w-screen max-w-screen-md  p-2 rounded-sm outline-none focus:border-solid focus:border-m-clear focus:border-2"
            type="email"
            placeholder="Email address"
            {...register("email", {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
            />
          {errors.email?.type === "required" && (
            <p className="text-red font-bold text-sm" role="alert">
              Email is required
            </p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="text-red font-bold text-sm" role="alert">
              Must be an email
            </p>
          )}
        </div>
        <div>
          <textarea
            className="text-p-dark w-screen max-w-screen-md p-2 rounded-sm outline-none focus:border-solid focus:border-m-clear focus:border-2"
            type="text"
            placeholder="Message"
            {...register("message", { required: true })}
            />
          {errors.message?.type === "required" && (
            <p className="text-red font-bold text-sm" role="alert">
              Message is required
            </p>
          )}
        </div>

        <div className="flex justify-center">
          <ButtonSecondary btnName="Send me an email" submitType={true} />
        </div>
        <a href="" id="sendIt"></a>
      </form>
          </div>
    </article>
  );
};

export default ContactSection;
