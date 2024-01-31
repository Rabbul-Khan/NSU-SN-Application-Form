import { useState, useRef } from "react";
import {
  Card,
  CardFooter,
  Input,
  Button,
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react";

import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { IconContext } from "react-icons";
import emailjs from "@emailjs/browser";

const startupTypes = [
  {
    label: "Agriculture",
    value: "agri",
  },
  {
    label: "Food Technology",
    value: "food",
  },
  {
    label: "E-commerce",
    value: "ecom",
  },
];

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    startupName: "",
    domain: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    form.current.reset();

    emailjs
      .sendForm(
        "service_me9rx0l",
        "template_ayh8d2y",
        form.current,
        "aJz1bNkxownFkofBi",
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setFormData({
            name: "",
            email: "",
            contact: "",
            startupName: "",
            domain: "",
          });
          alert("Application submitted successfully");
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <Card className="flex h-full w-full max-w-[1000px] animate-slideInLeft items-center rounded-none bg-primary  text-white md:grid md:h-[80%] md:w-[80%] md:grid-cols-[1fr_2fr] md:rounded-xl md:p-5 ">
      <h1 className="mx-auto pt-5 text-2xl font-bold md:hidden ">
        Start, <span className="text-[#f06ac6]">Grow</span>, Succeed - Join Us!
      </h1>

      <div className="hidden h-full flex-col justify-between p-10 pl-2 md:flex">
        <div>
          <h1 className="text-4xl font-extrabold ">
            Start, <span className="text-[#f06ac6]">Grow</span>, Succeed - Join
            Us!
          </h1>
        </div>
        <div>
          <div className="gap- flex flex-col text-sm">
            <div className="flex cursor-pointer items-center gap-2 rounded-lg p-3 hover:bg-secondary/10 hover:ring hover:ring-secondary">
              <IconContext.Provider value={{ color: "#f06ac6" }}>
                <FaPhone />
              </IconContext.Provider>
              +1 234 567 890
            </div>
            <div className="flex cursor-pointer items-center gap-2 rounded-lg p-3 hover:bg-secondary/10 hover:ring hover:ring-secondary">
              <IconContext.Provider value={{ color: "#f06ac6" }}>
                <FaEnvelope />
              </IconContext.Provider>
              company@mail.com
            </div>
            <div className="flex cursor-pointer items-center gap-2 rounded-lg p-3 hover:bg-secondary/10 hover:ring hover:ring-secondary">
              <IconContext.Provider value={{ color: "#f06ac6" }}>
                <FaLocationDot />
              </IconContext.Provider>
              499 Corliss, Yokofurt, ND
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-14">
          <SlSocialFacebook className="min-h-9 min-w-9 cursor-pointer  rounded-[50%] p-2 hover:bg-secondary" />
          <FaInstagram className="min-h-9 min-w-9 cursor-pointer rounded-[50%] p-2 hover:bg-secondary" />
          <FaXTwitter className="min-h-9 min-w-9 cursor-pointer rounded-[50%] p-2 hover:bg-secondary" />
        </div>
      </div>
      <div className="m-2 mt-5 w-full bg-[#E5E9FF] p-5 sm:rounded-lg md:m-0 md:h-auto md:max-w-[650px]">
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" flex flex-col gap-2.5  "
        >
          <div className="text-primary">
            <Input
              type="text"
              label="Name"
              name="name"
              isRequired
              value={formData.name}
              color="danger"
              variant="faded"
              className=""
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="text-primary">
            <Input
              type="email"
              label="Email"
              name="mail"
              value={formData.email}
              color="danger"
              isRequired
              variant="faded"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="text-primary">
            <Input
              type="string"
              label="Phone"
              value={formData.contact}
              color="danger"
              variant="faded"
              //classNames={{ label: 'text-black dark:text-white/90' }}
              //placeholder="John Doe"
              name="contact"
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
            />
          </div>
          <div className="text-primary">
            <Input
              type="startupName"
              label="Startup Name"
              name="startupName"
              value={formData.startupName}
              color="danger"
              variant="faded"
              isRequired
              //classNames={{ label: 'text-black dark:text-white/90' }}
              //placeholder="John Doe"

              onChange={(e) =>
                setFormData({ ...formData, startupName: e.target.value })
              }
            />
          </div>
          {/* <div>
            <p>Choose the Domain for your Startup:</p>
            <input type="radio" id="agri" name="domain" value="agri" />
            <label htmlFor="agri">Agriculture</label>
            <br />
            <input type="radio" id="food" name="domain" value="food" />
            <label htmlFor="food">Food Technology</label>
            <br /> <input type="radio" id="ecom" name="domain" value="ecom" />
            <label htmlFor="ecom">E-commerce</label>
            <br />
          </div> */}

          {/* <RadioGroup
            label="Choose the Domain for your Startup"
            onChange={(e) => {
              setFormData({
                ...formData,
                domain: e.target.value,
              });
            }}
          >
            <Radio value="agri">Agriculture</Radio>
            <Radio value="food">Food Technology</Radio>
            <Radio value="ecom">E-commerce</Radio>
          </RadioGroup> */}

          <div className="text-primary">
            <Autocomplete
              clearButtonProps={false}
              label="Select your Startup Type"
              name="domain"
              className=""
              variant="faded"
              color="danger"
              onSelectionChange={(e) => {
                console.log(e);
                setFormData({
                  ...formData,
                  domain: e,
                });
              }}
            >
              {startupTypes.map((type) => (
                <AutocompleteItem key={type.value} value={type.value}>
                  {type.label}
                </AutocompleteItem>
              ))}
            </Autocomplete>
          </div>

          <Button
            type="submit"
            color="secondary"
            className="py-7 font-semibold text-white sm:ml-auto sm:mt-5 sm:min-w-60 md:w-full lg:max-w-60"
          >
            Submit
          </Button>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 text-sm md:hidden">
        <div className="flex cursor-pointer items-center gap-2 rounded-lg p-3 hover:bg-secondary/10 hover:ring hover:ring-secondary">
          <IconContext.Provider value={{ color: "#f06ac6" }}>
            <FaPhone />
          </IconContext.Provider>
          +1 234 567 890
        </div>
        <div className="flex cursor-pointer items-center gap-2 rounded-lg p-3 hover:bg-secondary/10 hover:ring hover:ring-secondary">
          <IconContext.Provider value={{ color: "#f06ac6" }}>
            <FaEnvelope />
          </IconContext.Provider>
          company@mail.com
        </div>
        <div className="flex cursor-pointer items-center gap-2 rounded-lg p-3 hover:bg-secondary/10 hover:ring hover:ring-secondary">
          <IconContext.Provider value={{ color: "#f06ac6" }}>
            <FaLocationDot />
          </IconContext.Provider>
          499 Corliss , Yokofurt, ND
        </div>
      </div>
      <CardFooter className="flex justify-center gap-16 md:hidden">
        <SlSocialFacebook className="min-h-8 min-w-8 cursor-pointer rounded-[50%] p-2 hover:bg-secondary" />
        <FaInstagram className="min-h-8 min-w-8 cursor-pointer rounded-[50%] p-2 hover:bg-secondary" />
        <FaXTwitter className="min-h-8 min-w-8 cursor-pointer rounded-[50%] p-2 hover:bg-secondary" />
      </CardFooter>
    </Card>
  );
};

export default Form;
