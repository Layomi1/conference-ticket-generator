import React, { useState, useCallback } from "react";
import Divider from "../components/Divider";
import Button from "../components/Button";
import envelope from "../assets/images/envelope.png";
import { useDropzone } from "react-dropzone";
import cloud from "../assets/images/cloud.png";
import Heading from "../components/Heading";

const Step2 = () => {
  const [dataUrl, setDataUrl] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [uploadedUrl, setUploadedUrl] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      message,
      profilePhoto: dataUrl,
    };
    localStorage.setItem("attendeeData", JSON.stringify(formData));
    setName("");
    setEmail("");
    setMessage("");
  };

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
      <header className=" flex justify-between items-center pb-3   md:flex-row">
        <Heading title="Attendee Details" />
      </header>
      <Divider isProgressbar={true} progress="54%" />
      <form
        onSubmit={handleSubmit}
        className=" w-full mt-8 flex flex-col gap-8 rounded-4xl border-[1px] border-[#0E464F] p-6 "
      >
        <article className="bg-[#bg-light-teal pt-6 pb-7 flex px-6  flex-col items-center justify-center  mb-8 relative ">
          <h3 className="absolute -top-6 left-[5%] ">Upload Profile Photo</h3>
          <article className="bg-black -z-2 w-full h-[200px] relative">
            <article
              {...getRootProps()}
              className=" absolute -top-8 left-[25%] grid place-items-center bg-light-teal rounded-[12px] p- border-4 border-midnight-teal mt-3  w-[240px]  h-[240px]"
            >
              <input {...getInputProps()} />
              {dataUrl ? (
                <img
                  src={dataUrl}
                  alt="Uploaded"
                  className="w-32 h-32 rounded-full"
                />
              ) : (
                <div className="flex flex-col gap-4 items-center">
                  <img src={cloud} alt="cloud" className="w-12 h-12" />
                  <p className="text-sm text-gray-400 px-6 text-center">
                    Drag & drop or click to upload
                  </p>
                </div>
              )}
            </article>
          </article>
        </article>
        <Divider isProgressbar={false} progress="0" />

        <article className="grid gap-8 ">
          <article className="grid gap-2 ">
            <label>Enter your name</label>
            <input
              type="text"
              className="px-[14px] py-4 rounded-[8px] bg-transparent border-light-teal border-[1px]"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setMessage(e.target.value)}
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
