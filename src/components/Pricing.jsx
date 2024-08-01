import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-6 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-lg">
              <p className="text-3xl font-bold">
                {option.title}
                {option.title === "Pro" && (
                  <span className="text-xl mb-4 ml-2 bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-500 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center mb-3 text-neutral-500"
                  >
                    <CheckCircle2 className="text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 text-xl bg-gradient-to-r from-orange-500 to-red-800 rounded-lg tracking-tight hover:opacity-50 border border-orange-800 transition duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
