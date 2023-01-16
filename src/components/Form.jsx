import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Form = () => {
  const MySwal = withReactContent(Swal);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [contactData, setContactData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    setContactData({
      name: name,
      email: email,
      text: text,
    });
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    setContactData({
      name: name,
      email: email,
      text: text,
    });
  };
  const textChangeHandler = (e) => {
    setText(e.target.value);
    setContactData({
      name: name,
      email: email,
      text: text,
    });
  };

  async function sendingDataToApi(contactData) {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://mypersonalwebsite-efb5a-default-rtdb.firebaseio.com/contactdata.json",
        {
          method: "POST",
          body: JSON.stringify(contactData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not create data.");
      } else {
        setIsLoading(false);
        MySwal.fire({
          title: <p>Success</p>,
          text: "Your mail recieved",
          icon: "success",
          confirmButtonColor: "#3085d6",
          showConfirmButton: true,
        });
      }
      return null;
    } catch (error) {
        setIsLoading(false);
        MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            confirmButtonColor: "#3085d6",
            footer: '<p>Reach to developer from "hire me" button</p>'
          });
    }
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || text === "") {
      return MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Name, email or text inputs shouldn`t be empty',
        confirmButtonColor: "#3085d6",
      });;
    } else {
      sendingDataToApi(contactData);
    }

    setName("");
    setEmail("");
    setText("");
  };
  return (
    <div className="grid grid-cols-4">
      <form onSubmit={submitHandler} className="col-span-2 col-start-2">
        <div className="grid grid-cols-2 justify-center gap-4 h-10 my-4 ">
          <input
            type="email"
            name="UserEmail"
            placeholder="Enter Your Email"
            onChange={emailChangeHandler}
            value={email}
          ></input>
          <input
            type="userName"
            name="UserName"
            placeholder="Your Name"
            onChange={nameChangeHandler}
            value={name}
          ></input>
        </div>
        <div className="text-xl my-4">
          <textarea
            name="text"
            placeholder="Write Something"
            className="h-60 w-full text-base placeholder:px-2 placeholder:italic placeholder:text-xl border-2 rounded-lg outline-zinc-400 outline-1"
            onChange={textChangeHandler}
            value={text}
          ></textarea>
        </div>
        <div className="text-end">
            {isLoading ? <p className="w-full my-6 text-end text-sky-800 text-bold text-3xl">Loading...</p> :<button
            type="submit"
            className="w-full h-12 rounded-3xl sm:w-40 my-6 bg-sky-800"
          >
            Send Message
          </button>}
          
        </div>
      </form>
    </div>
  );
};

export default Form;
