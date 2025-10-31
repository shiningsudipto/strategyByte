import CustomButton from "@/components/ui/CustomButton";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const BecomeAuthor = () => {
  return (
    <section className="bg-navy-bg text-white">
      <div className="container grid lg:grid-cols-2 grid-cols-1 gap-5 section-gap section-gap-y">
        <div className="lg:w-3/4">
          <h2 className="heading mb-4">Become A Published Author</h2>
          <p className="lg:mb-14 mb-5">
            Contribute design articles that inspire, educate, and showcase your
            expertise to a global audience. Let your voice be heard and make an
            impact in the industry!
          </p>
          <CustomButton
            label="Submit Article"
            icon={<FiArrowUpRight />}
            variant="primary"
          />
        </div>
        <div className="flex justify-end">
          <Image
            alt="Become A Published Author"
            src={"/Article Image.png"}
            width={528}
            height={376}
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default BecomeAuthor;
