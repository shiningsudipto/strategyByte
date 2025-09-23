"use client";
import Input from "@/components/form/Input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import NoteImg from "@/assets/contact-Notes.png";
import Dropdown from "@/components/form/Dropdown";

const timeOptions = [
  { label: "01 - 10", value: "1-10" },
  { label: "10 - 30", value: "10-30" },
  { label: "30 - 70", value: "30-70" },
  { label: "Above 80", value: "above-80" },
];
const supportOptions = [
  { label: "Digital Marketing & SEO", value: "digital-marketing-seo" },
  {
    label: "Strategic Branding Management",
    value: "strategic-branding-management",
  },
  { label: "Website Development", value: "website-development" },
  { label: "Business Optimization", value: "business-optimization" },
];

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
    control,
    formState: { errors },
  } = useForm<callForm>();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="p-10 rounded-[24px] flex bg-white">
      <div className="w-[400px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-between h-full w-[400px]"
        >
          {step === 1 ? (
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
            </div>
          ) : (
            <div className="space-y-5 ">
              {/* Name */}
              <Input
                label="Company"
                type="text"
                placeholder="XYZ Ltd"
                register={register("name", {
                  required: "Name is required",
                })}
                error={errors.name}
              />
              <Dropdown
                label="Team Size"
                name="teamSize"
                options={timeOptions}
                control={control}
              />
              <Dropdown
                label="How Can We Support You?"
                name="support"
                options={supportOptions}
                control={control}
              />
            </div>
          )}
          <div className="flex items-center justify-between">
            <p>Step {step}/2</p>
            {step === 1 ? (
              <button
                type="button"
                onClick={() => setStep(2)}
                className="py-[10px] px-6 bg-blue-100 font-bold text-white rounded-full cursor-pointer"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                onClick={() => setStep(2)}
                className="py-[10px] px-6 bg-blue-100 font-bold text-white rounded-full cursor-pointer"
              >
                Submit
              </button>
            )}
          </div>
          <p className="text-neutral-700 text-sm">
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
