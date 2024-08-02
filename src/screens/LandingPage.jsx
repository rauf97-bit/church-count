import React, { useState } from "react";
//import AttendanceModal from "../components/AttendanceModal";
import Itadori from "../assets/images/Itadori.jpg";
import Modal from "../containers/Modal";
export const LandingPage = () => {
  const [showModal, setshowModal] = useState(false);
  const [DisableBtn, setDisableBtn] = useState("false");
  // useState

  return (
    <div>
      <Modal open={showModal} onClose={() => setshowModal(false)}>
        <div className="text-center w-72">
          {/* <Trash size={56} className="mx-auto text-red-500" /> */}
          <div className="mx-auto my-4 w-56">
            <h5 className="text-md font-black text-gray-800 py-2">
              Are you within the Church's viccinity ?
            </h5>
          </div>
          <div className="flex gap-4">
            <button
              className="btn btn-danger w-full"
              onClick={() => {
                setshowModal(false);
                setDisableBtn("true");
              }}
            >
              Confirm
            </button>
            <button
              className="btn btn-light w-full"
              onClick={() => setshowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      {/* <AttendanceModal /> */}
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-3">
          <p className="font-bold text-gray-800 uppercase hover:text-gray-700 text-4xl">
            ChurchCount
          </p>
          <p className="text-lg text-gray-600">
            Record your presence in the House of the Lord.
          </p>
        </div>
      </header>

      <div className="container mx-auto flex flex-wrap py-3">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          <article className="flex flex-col shadow my-4">
            <div className="bg-white flex flex-col justify-start p-6">
              <h1 className="text-2xl font-bold pb-3">Introduction</h1>
              <p className="pb-3">
                Introducing CHURCHCOUNT, a revolutionary app designed to
                streamline your experience in the House of the Lord. This
                innovative application is crafted to ensure your presence is
                effortlessly recorded, enhancing the efficiency and organization
                of church attendance tracking. Whether you're attending services
                in-person or participating remotely, CHURCHCOUNT offers a
                seamless way to mark your participation, making it easier for
                church administrators to manage attendance records. Built with a
                user-friendly interface, CHURCHCOUNT is compatible with both iOS
                and Android devices, ensuring accessibility for everyone in your
                congregation. Its intuitive design allows for quick and easy
                check-ins, whether through a simple tap or a more detailed
                sign-in process, catering to the preferences of various
                attendees. Beyond just attendance tracking, CHURCHCOUNT aims to
                foster a stronger sense of community within your church. By
                integrating features that encourage interaction and engagement,
                such as sharing prayers, participating in polls, or viewing
                upcoming events, the app becomes a central hub for all things
                related to your spiritual journey. Embrace the future of church
                attendance with CHURCHCOUNT.
              </p>
            </div>
          </article>
        </section>

        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          <div className="w-full bg-white shadow flex flex-col my-4 p-6 py-9">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
              <div className="md:flex text-center">
                <div className="md:flex-shrink-0">
                  <img
                    className="mx-auto block h-48 w-full object-cover rounded-full"
                    src={Itadori}
                    alt="Profile Picture"
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Asst. Secretary
                  </div>
                  <a
                    href="#"
                    className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                  >
                    Itadori Yuji
                  </a>
                  <p className="mt-2 text-gray-500">
                    Bio goes here. This is a short description about the person
                    or entity represented by this profile card.
                  </p>
                </div>
              </div>
            </div>

            {/* <p className="text-xl font-semibold pb-5">About Us</p>
            <p className="pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              mattis est eu odio sagittis tristique. Vestibulum ut finibus leo.
              In hac habitasse platea dictumst.
            </p> */}
            <button
              disabled={DisableBtn === "true" ? true : false}
              onClick={() => setshowModal(true)}
              className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
            >
              Clock in
            </button>
          </div>
        </aside>
      </div>

      <footer className="w-full border-t bg-white pb-3">
        <div className="w-full container mx-auto flex flex-col items-center">
          <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
            <a href="#" className="uppercase px-3">
              About Us
            </a>
            <a href="#" className="uppercase px-3">
              Privacy Policy
            </a>
            <a href="#" className="uppercase px-3">
              Terms & Conditions
            </a>
            <a href="#" className="uppercase px-3">
              Contact Us
            </a>
          </div>
          <div className="uppercase pb-6">&copy; ZERATECH</div>
        </div>
      </footer>
    </div>
  );
};
