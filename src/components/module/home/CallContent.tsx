"use client";
import Input from "@/components/form/Input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import NoteImg from "@/assets/contact-Notes.png";
import Dropdown from "@/components/form/Dropdown";

type callForm = {
  name: string;
  email: string;
  phone: string;
};

const CallContent = () => {
  const [step, setStep] = useState<number>(1);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<callForm>();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="p-10 rounded-[24px] flex bg-white">
      <div className="w-[400px]">
        <form onSubmit={handleSubmit(onSubmit)} className="py-10 w-[400px]">
          <div className="space-y-5 ">
            {/* Name */}
            <Input
              label="Name"
              type="text"
              placeholder="John Doe"
              register={register("name", {
                required: "Name is required",
              })}
              error={errors.name}
            />
            {/* Phone */}
            <Input
              label="Phone"
              type="string"
              placeholder="Enter Your Phone Number"
              register={register("phone", { required: "Phone is required" })}
              error={errors.email}
            />
            {/* Email */}
            <Input
              label="Email"
              type="email"
              placeholder="Enter Your Email Address"
              register={register("email", { required: "Email is required" })}
              error={errors.email}
            />
            <Dropdown />
          </div>
          <div className="flex items-center justify-between mt-10">
            <p>Step {step}/2</p>
            <button className="py-[10px] px-6 bg-blue-100 font-bold text-white rounded-full cursor-pointer">
              Next
            </button>
          </div>
          <p className="text-neutral-700 text-sm my-10">
            By proceeding, you confirm that you have read and agree to{" "}
            <Link href={"#"} className="text-primary underline font-semibold">
              StrategyByte&apos;s Terms of Use
            </Link>{" "}
            and{" "}
            <Link href={"#"} className="text-primary underline font-semibold">
              Privacy Notice.
            </Link>
          </p>
        </form>
      </div>
      <div className="flex justify-center w-full">
        <Image src={NoteImg} alt="notes" height={520} width={590} />
      </div>
    </div>
  );
};

export default CallContent;
