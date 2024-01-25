import { useState } from 'react';
import axios from 'axios';
import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import { RadioGroup, Radio } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { FaPhone } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
import { FaEnvelope } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';

const startupTypes = [
  {
    label: 'Agriculture',
    value: 'agri',
  },
  {
    label: 'Food Technology',
    value: 'food',
  },
  {
    label: 'E-commerce',
    value: 'ecom',
  },
];

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    startupName: '',
    domain: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, contact, startupName, domain } = formData;
    //console.log(e);
    try {
      console.log(formData);

      // const response = await axios.post(
      //   'http://localhost:3000/api/submit',
      //   formData
      // );

      //if (response.status === 201) {
      if (true) {
        console.log('Application Successful');
        console.log('Form Data:', name, email, contact, startupName, domain);
        // console.log('API Response:', response.data);
      } else {
        console.error('Application failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Card className="grid w-[80%] h-[80%] grid-cols-[1fr_1.5fr] p-5 text-white bg-primary">
      <div className="flex flex-col p-5">
        <CardHeader>
          <h1 className="text-3xl font-bold ">
            Start, <span className="text-secondary/80">Grow</span>, Succeed -
            Join Us!
          </h1>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col gap-5 justify-between h-[80%] ">
            <div className="flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:ring hover:ring-secondary hover:bg-secondary/10">
              <IconContext.Provider value={{ color: '#f06ac6' }}>
                <FaPhone />
              </IconContext.Provider>
              Company Number
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:ring hover:ring-secondary hover:bg-secondary/10">
              <IconContext.Provider value={{ color: '#f06ac6' }}>
                <FaEnvelope />
              </IconContext.Provider>
              Company Email
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:ring hover:ring-secondary hover:bg-secondary/10">
              <IconContext.Provider value={{ color: '#f06ac6' }}>
                <FaLocationDot />
              </IconContext.Provider>
              Company Address
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex self-end gap-20">
          <FaFacebookF className="hover:bg-secondary min-h-8 min-w-8 p-2 rounded-[50%]" />
          <FaInstagram className="hover:bg-secondary min-h-8 min-w-8 p-2 rounded-[50%]" />
          <FaXTwitter className="hover:bg-secondary min-h-8 min-w-8 p-2 rounded-[50%]" />
        </CardFooter>
      </div>
      <Card className="p-5 m-5 bg-slate-100">
        <CardBody>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
            <div>
              <Input
                type="text"
                label="Name"
                //placeholder="John Doe"
                color="primary"
                variant="underlined"
                //classNames={{ label: 'text-black dark:text-white/90' }}
                id="name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <Input
                type="email"
                label="Email"
                color="primary"
                variant="underlined"
                //classNames={{ label: 'text-black dark:text-white/90' }}
                //placeholder="johnDoe@email.com"
                id="email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <Input
                type="string"
                label="Contact"
                color="primary"
                variant="underlined"
                //classNames={{ label: 'text-black dark:text-white/90' }}
                //placeholder="John Doe"
                id="contact"
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
              />
            </div>
            <div>
              <Input
                type="startupName"
                label="Startup Name"
                color="primary"
                variant="underlined"
                //classNames={{ label: 'text-black dark:text-white/90' }}
                //placeholder="John Doe"
                id="startupName"
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

            <Autocomplete
              clearButtonProps={false}
              label="Select your Startup Type"
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

            <Button type="submit" color="">
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
    </Card>
  );
};

export default Form;
