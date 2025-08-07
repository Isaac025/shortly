import React, { useEffect, useState } from "react";
import icon1 from "../assets/icon-brand-recognition.svg";
import icon2 from "../assets/icon-detailed-records.svg";
import icon3 from "../assets/icon-fully-customizable.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  link: yup.string().required("Please add a link"),
});

const STORAGE_KEY = "shortened_links";

const Statistics = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [copiedUrl, setCopiedUrl] = useState(null);

  // Load from localStorage on component mount
  useEffect(() => {
    const savedLinks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setLinks(savedLinks);
  }, []);

  // Save to localStorage whenever links change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
  }, [links]);

  const handleFormSubmit = async (data) => {
    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
          data.link
        )}`
      );

      if (!response.ok) throw new Error("Failed to shorten the URL");

      const shortUrl = await response.text();

      const newLink = {
        original: data.link,
        short: shortUrl,
      };

      setLinks((prev) => [newLink, ...prev]); // Add new link to the top
      reset();
    } catch (error) {
      setErrorMsg("There was a problem shortening the URL.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch (err) {
      alert("Failed to copy the URL.");
    }
  };

  return (
    <div className="bg-[#e0dede]">
      <div className="component">
        {/* FORM */}
        <div className="bg-[#35323a] p-3 md:p-6 rounded-md h-auto -translate-y-[50%]">
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="w-[90%] mx-auto flex flex-col md:flex-row gap-3"
          >
            <input
              type="text"
              placeholder="Shorten a link here..."
              className={`bg-white  w-full p-[10px] pl-[20px] rounded-md ${
                errors.link
                  ? "outline-2 outline-red-500 placeholder:text-red-500"
                  : ""
              }`}
              {...register("link")}
            />
            {errors.link && (
              <span className="text-red-500 text-sm md:hidden">
                {errors.link.message}
              </span>
            )}
            <button
              type="submit"
              className="bg-[#40b3a6] text-white rounded-md md:w-[150px] w-full h-[50px] cursor-pointer hover:bg-[#a1e6de]"
              disabled={loading}
            >
              {loading ? "Shortening..." : "Shorten It!"}
            </button>
          </form>
          {errors.link && (
            <span className="text-red-500 text-sm md:block hidden ml-15 mt-2">
              {errors.link.message}
            </span>
          )}
          {errorMsg && (
            <p className="text-red-500 text-sm mt-2 ml-15">{errorMsg}</p>
          )}
        </div>

        {/* LIST OF SHORTENED LINKS */}
        {links.length > 0 && (
          <div className="w-[90%] mx-auto space-y-4 -mt-4 mb-8">
            {links.map((link, index) => (
              <div
                key={index}
                className="bg-white rounded-md p-4 flex flex-col md:flex-row md:justify-between items-start md:items-center shadow"
              >
                <p className="text-gray-800 break-all mb-2 md:mb-0 w-full md:w-auto border-b md:border-b-0 border-gray-400 pb-4 md:pb-0">
                  {link.original}
                </p>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <p className="text-[#40b3a6] break-all">{link.short}</p>
                  <button
                    onClick={() => handleCopy(link.short)}
                    className={`rounded-md  w-full sm:self-center  md:w-[120px] h-[50px] text-white transition-colors cursor-pointer duration-300 ${
                      copiedUrl === link.short
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "bg-[#40b3a6] hover:bg-[#a1e6de]"
                    }`}
                  >
                    {copiedUrl === link.short ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* STATISTICS SECTION */}
        <div className="my-4">
          <h2 className="text-center text-gray-150 md:text-3xl text-2xl font-[700] mb-2">
            Advanced Statistics
          </h2>
          <p className="text-gray-500 text-[18px] text-center w-full md:w-[450px] mx-auto font-[500]">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        {/* CARDS */}
        <section className="mb-18 md:mb-12">
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 p-5 md:p-10">
            {/* Card 1 */}
            <div className="bg-white rounded-sm shadow-lg h-full p-5 relative">
              {/* Vertical line for mobile and desktop */}
              <div className="absolute bg-[#2ACFCF] w-2 h-9 md:h-2 md:w-13 md:top-[50%] top-51 left-1/2 transform -translate-x-1/2 md:left-auto md:-right-20 "></div>

              <div className="flex items-center justify-center bg-[#393455] p-3 rounded-full mt-4 mb-8 absolute -top-10 md:left-2 left-1/2 transform -translate-x-1/2 md:translate-x-0">
                <img
                  src={icon1}
                  alt="Brand Recognition"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-gray-800 text-center md:text-start font-bold text-xl mt-8">
                Brand Recognition
              </h3>
              <p className="text-gray-400 mt-2 text-center md:text-start">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-sm shadow-lg h-full p-5 relative mt-8 md:mt-8">
              {/* Vertical line for mobile and desktop */}
              <div className=" absolute bg-[#2ACFCF] w-2 h-full md:h-2 md:w-13 md:top-[50%] top-65 left-1/2 transform -translate-x-1/2 md:left-auto md:-right-20 "></div>

              <div className="flex items-center justify-center bg-[#393455] p-3 rounded-full absolute -top-10 md:left-2 left-1/2 transform -translate-x-1/2 md:translate-x-0">
                <img src={icon2} alt="Detailed Records" className="w-12 h-12" />
              </div>
              <h3 className="text-gray-800 font-bold text-xl mt-8 text-center md:text-start">
                Detailed Records
              </h3>
              <p className="text-gray-400 mt-2 text-center md:text-start">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>

            <div className="bg-white h-full rounded-sm shadow-lg p-5 relative mt-18 md:mt-16">
              <div className="flex items-center justify-center bg-[#393455] p-3 rounded-full absolute -top-10 md:left-2 left-1/2 transform -translate-x-1/2 md:translate-x-0">
                <img
                  src={icon3}
                  alt="Fully Customizable"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-gray-800 font-bold text-xl mt-8 text-center md:text-start">
                Fully Customizable
              </h3>
              <p className="text-gray-400 mt-2 text-center md:text-start">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
                
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Statistics;
