import React, { useState } from "react";
import { ImCross } from 'react-icons/im'
import { useGeneralStore } from "../stores/generalStore";

const AuthModal = () => {
  const [isRegistered, setIsRegistered] = useState(false)
  const setLoginIsOpen = useGeneralStore(state => state.setLoginIsOpen)
  const isLoginOpen = useGeneralStore(state => state.isLoginOpen)

  return (
    <div
      id="auth_modal"
      className="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50"
    >
      <div
        className="relative bg-white w-full max-w-[470px] h-[70%] p-4 rounded-lg"
      >
        <div className="w-full flex justify-end">
          <button
            onClick={() => setLoginIsOpen(!isLoginOpen)}
            className="p-1.5 rounded-full bg-gray-100"
          >
            <ImCross color="#000000" size="26" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AuthModal
