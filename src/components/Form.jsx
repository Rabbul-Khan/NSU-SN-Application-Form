import { useState, useRef } from "react";
//import axios from "axios";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { FaPhone } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { FaEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
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
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const { name, email, contact, startupName, domain } = formData;
  //   //console.log(e);
  //   try {
  //     console.log(formData);

  //     const response = await axios.post(
  //       "http://localhost:3001/api/submit",
  //       formData,
  //     );

  //     if (response.status === 201) {
  //       console.log("Application Successful");
  //       console.log("Form Data:", name, email, contact, startupName, domain);
  //       setFormData({
  //         name: "",
  //         email: "",
  //         contact: "",
  //         startupName: "",
  //         domain: "",
  //       });
  //       // console.log('API Response:', response.data);
  //     } else {
  //       console.error("Application failed");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  return (
    <Card className="flex h-max max-w-[1000px]  rounded-none bg-primary text-white sm:rounded-xl md:grid md:h-[80%] md:w-[80%] md:grid-cols-[1fr_2fr] md:p-5">
      <h1 className="mx-auto p-5 pb-0 text-2xl font-bold md:hidden">
        Start, <span className="text-[#f06ac6]">Grow</span>, Succeed - Join Us!
      </h1>

      <div className="hidden flex-col p-5 md:flex ">
        <CardHeader>
          <h1 className="text-3xl font-bold ">
            Start, <span className="text-[#f06ac6]">Grow</span>, Succeed - Join
            Us!
          </h1>
        </CardHeader>
        <CardBody>
          <div className="flex h-[80%] flex-col justify-center gap-5 ">
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
        </CardBody>
        <CardFooter className="flex gap-16 self-end">
          <FaFacebookF className="min-h-8 min-w-8 cursor-pointer  rounded-[50%] p-2 hover:bg-secondary" />
          <FaInstagram className="min-h-8 min-w-8 cursor-pointer rounded-[50%] p-2 hover:bg-secondary" />
          <FaXTwitter className="min-h-8 min-w-8 cursor-pointer rounded-[50%] p-2 hover:bg-secondary" />
        </CardFooter>
      </div>
      <Card className="m-5 h-max  bg-slate-100 px-5  md:h-auto md:max-w-[650px]">
        <CardBody className="h-max overflow-hidden p-0 pb-3 md:p-5">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex min-h-fit flex-col gap-2.5"
          >
            <Input
              type="text"
              label="Name"
              id="name"
              value={formData.name}
              //placeholder="John Doe"
              color="primary"
              variant="underlined"
              //classNames={{ label: 'text-black dark:text-white/90' }}

              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <Input
              type="email"
              label="Email"
              id="email"
              value={formData.email}
              color="primary"
              variant="underlined"
              //classNames={{ label: 'text-black dark:text-white/90' }}
              //placeholder="johnDoe@email.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <Input
              type="string"
              label="Contact"
              value={formData.contact}
              color="primary"
              variant="underlined"
              //classNames={{ label: 'text-black dark:text-white/90' }}
              //placeholder="John Doe"
              id="contact"
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
            />

            <Input
              type="startupName"
              label="Startup Name"
              id="startupName"
              value={formData.startupName}
              color="primary"
              variant="underlined"
              //classNames={{ label: 'text-black dark:text-white/90' }}
              //placeholder="John Doe"

              onChange={(e) =>
                setFormData({ ...formData, startupName: e.target.value })
              }
            />

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

            <Autocomplete
              clearButtonProps={false}
              label="Select your Startup Type"
              id="domain"
              className=""
              variant="underlined"
              color="primary"
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

            <Button
              type="submit"
              color="secondary"
              className="text-white md:mt-10"
            >
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
      <CardBody className="overflow-hidden text-sm md:hidden ">
        <div className="flex flex-col items-center justify-center gap-1 ">
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
      </CardBody>
      <CardFooter className="flex justify-center gap-16 md:hidden">
        <FaFacebookF className="min-h-8 min-w-8 cursor-pointer rounded-[50%] p-2 hover:bg-secondary" />
        <FaInstagram className="min-h-8 min-w-8 cursor-pointer rounded-[50%] p-2 hover:bg-secondary" />
        <FaXTwitter className="min-h-8 min-w-8 cursor-pointer rounded-[50%] p-2 hover:bg-secondary" />
      </CardFooter>
    </Card>
  );
};

export default Form;
