import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "../../../node_modules/next/link";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  return (
    <Bounded
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
  >
    <Heading as="h2" size="lg">
      {slice.primary.heading}
    </Heading>
    {slice.items.map((item, index) => (
      <div key={index} className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
        <Heading as="h3" size="sm">
          {item.title}
        </Heading>

        <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
          <span>{item.mobile_phone}</span>{" "}
          <span className="text-3xl font-extralight">:  <Link  href="tel://+201285382828">+201285382828</Link> </span>{" "}
        </div>

        <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
          <span>Email</span>{" "}
          <span className="text-3xl font-extralight">:  <Link  href="mailto:amroabouelezswe@gmail.com">amroabouelezswe@gmail.com</Link> </span>
        </div>
        
        <div className="prose prose-lg prose-invert mt-4">
          <PrismicRichText field={item.description} />
        </div>
      </div>
    ))}
  </Bounded>
);
};

export default Contact;
