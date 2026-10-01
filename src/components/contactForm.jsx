import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../validations/contactschema"

export default function ContactForm() {
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
    mode: "onTouched",
  });

  function onSubmit(data) {
    console.log("CONTACT FORM SUBMIT", data);
    alert("submited!")
    setSuccess("Message submitted successfully!");

  reset();

  setValue("name", "");
  setValue("email", "");
  setValue("subject", "");
  setValue("message", "");
};
   
  


  return (
    <form
      onSubmit={handleSubmit(onSubmit , (errors) => console.log("VALIDATION ERRORS:", errors))}
      noValidate autoComplete="off"
      className="w-full rounded-xl bg-white p-8 shadow-sm sm:p-10"
    >

      
      {success && (
        <div className="mb-5 rounded-md bg-[#e7f8f7] px-4 py-3 text-sm text-[#00a19e]">
          {success}
        </div>
      )}

      
      <div className="mb-5">
        <input
          type="text"
          placeholder="Your Name"
          {...register("name")}
          className={`w-full rounded-lg border px-4 py-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 ${
            errors.name
              ? "border-red-400"
              : "border-gray-200 focus:border-[#00a19e]"
          }`}
        />

        {errors.name && (
          <p className="mt-2 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>


      <div className="mb-5">
        <input
          type="email"
          placeholder="Your Email"
          {...register("email")}
          className={`w-full rounded-lg border px-4 py-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 ${
            errors.email
              ? "border-red-400"
              : "border-gray-200 focus:border-[#00a19e]"
          }`}
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>


      <div className="mb-5">
        <input
          type="text"
          placeholder="Subject"
          {...register("subject")}
          className={`w-full rounded-lg border px-4 py-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 ${
            errors.subject
              ? "border-red-400"
              : "border-gray-200 focus:border-[#00a19e]"
          }`}
        />

        {errors.subject && (
          <p className="mt-2 text-sm text-red-500">
            {errors.subject.message}
          </p>
        )}
      </div>


     
      <div className="mb-6">
        <textarea
          rows="6"
          placeholder="Message"
          {...register("message")}
          className={`w-full resize-none rounded-lg border px-4 py-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 ${
            errors.message
              ? "border-red-400"
              : "border-gray-200 focus:border-[#00a19e]"
          }`}
        ></textarea>

        {errors.message && (
          <p className="mt-2 text-sm text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>


     
      <button
        type="submit"
        className="w-full rounded-lg bg-[#00a19e] py-4 text-sm font-semibold text-white transition hover:bg-[#008f8c]"
      >
        Submit Message
      </button>
      
      

    </form>
  ); 

}  
 