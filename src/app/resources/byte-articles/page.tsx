// import { articleBlogsQuery } from "@/constants/query";
// import { fetchGraphQL } from "@/lib/contentful";

import Tree from "@/components/icons/Tree";
import { menuLinks } from "@/constants/importantLinks";
import Link from "next/link";

const page = async () => {
  // articles data
  // const res = await fetchGraphQL(articleBlogsQuery);
  // const posts = res?.data?.newsCollection?.items || [];
  // console.log(posts);

  return (
    <div>
      {/* header */}
      <div className="section-gap -mt-[100px] pt-[130px] bg-[#EDF4FF] border-b">
        {/* header content */}
        <div className="flex justify-between items-center h-[290px]">
          <div>
            <h6 className="text-navy-700">
              Welcome to StrategyByte’s <strong>Growth Journal</strong>, where
              your journey begins and never stops.
            </h6>
            <h1 className="heading mt-5">Industry updates, growth & more</h1>
          </div>
          <div>
            <Tree />
          </div>
        </div>
        {/* menu */}
        <ul className="flex items-center">
          {menuLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`px-4 py-2 inline-block  font-semibold ${
                  link.active
                    ? "text-primary border-b-2 border-primary"
                    : "text-neutral-500"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* blogs */}
      <div className="p-10"></div>
    </div>
  );
};

export default page;
