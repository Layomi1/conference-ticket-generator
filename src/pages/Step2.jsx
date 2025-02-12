import React, { useState, useCallback } from "react";
import Divider from "../components/Divider";
import Button from "../components/Button";
import envelope from "../assets/images/envelope.png";
import { useDropzone } from "react-dropzone";
import cloud from "../assets/images/cloud.png";

const Step2 = ({ name, email, message, updatedFields }) => {
  const [dataUrl, setDataUrl] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setDataUrl(reader.result);
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <header className=" flex justify-between items-center pb-3   md:flex-row  ">
        <h1 className="text-2xl md:text-[32px] font-jejuMyeongjo">
          Attendee Details
        </h1>
        <p className="">Step 2/3</p>
      </header>
      <Divider isProgressbar={true} progressWidth={"232px"} />
      <form className=" w-full mt-8 flex flex-col gap-8 rounded-4xl border-[1px] border-[#0E464F] p-6 ">
        <article className="bg-gradient-to-b from-[#07373F] to-[#0A0C11] px-6 pt-6 pb-7 flex  flex-col items-center justify-center rounded-3xl mb-8">
          <h3>Upload Profile Photo</h3>
          <article
            {...getRootProps()}
            className="grid place-items-center bg-[#0A0C11] "
          >
            <input {...getInputProps()} />
            {dataUrl ? (
              <img
                src={dataUrl}
                alt="Uploaded"
                className="w-32 h-32 rounded-full"
              />
            ) : (
              <div className="flex flex-col items-center">
                <img src={cloud} alt="cloud" className="w-12 h-12" />
                <p className="text-sm text-gray-400">
                  Drag & drop or click to upload
                </p>
              </div>
            )}
          </article>
        </article>
        <Divider isProgressbar={false} progressWidth="0" />

        <article className="grid gap-8 ">
          <article className="grid gap-2 ">
            <label>Enter your name</label>
            <input
              type="text"
              className="px-[14px] py-4 rounded-[8px] bg-transparent border-light-teal border-[1px]"
              value={name}
              onChange={(e) => updatedFields({ name: e.target.value })}
            />
          </article>
          <article article className="grid gap-2">
            <label>Enter your email *</label>
            <article className="px-[14px] py-4 rounded-[8px] bg-transparent flex items-center gap-2 border-light-teal border-[1px]">
              <img src={envelope} alt="envelope" />
              <input
                type="email"
                required
                placeholder="hello@avioflagos.io"
                className="bg-transparent outline-none"
                value={email}
                onChange={(e) => updatedFields({ email: e.target.value })}
              />
            </article>
          </article>
          <article article className="grid gap-2 ">
            <label>About the project</label>
            <textarea
              name="about"
              id="about"
              placeholder="Textarea"
              rows="3"
              className="p-3 rounded-[8px] bg-transparent border-light-teal border-[1px]"
              value={message}
              onChange={(e) => updatedFields({ message: e.target.value })}
            ></textarea>
          </article>

          <article className="w-full flex flex-col md:flex-row items-center justify-center gap-8 ">
            <Button
              type="button"
              variant="outlined"
              justify="center"
              style={{
                paddingLeft: "106.5px",
                paddingRight: "106.5px",
                paddingTop: "12px",
                paddingBottom: "12px",
              }}
            >
              Back
            </Button>
            <Button
              type="submit"
              variant="primary"
              justify="center"
              style={{
                paddingLeft: "66.5px",
                paddingRight: "66.5px",
                paddingTop: "12px",
                paddingBottom: "12px",
              }}
            >
              Get My Free Ticket
            </Button>
          </article>
        </article>
      </form>
    </>
  );
};

export default Step2;
