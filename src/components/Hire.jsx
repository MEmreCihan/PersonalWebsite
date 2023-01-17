import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Hire = () => {
  const MySwal = withReactContent(Swal);
  
  const clickHandler = () => {
    MySwal.fire({
      title: <p>Call me?</p>,
      text: "0 (506) 930 59 11",
      icon: "info",
      confirmButtonColor: '#3085d6',
      showConfirmButton: true,
    })
  };

  return (
    <div name="hire" className="flex justify-around bg-sky-700 py-6 ">
      <div className="px-2">
        <p className="text-white font-extrabold text-2xl">
          Want to work with me?
        </p>
        <p className="text-white font-light text-xl">
          Always feel Free to Contact & Hire me
        </p>
      </div>
      <div className="flex px-2">
        <button
          onClick={clickHandler}
          className="w-24 bg-white text-sky-700 font-bold hover:bg-zinc-400"
        >
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Hire;
