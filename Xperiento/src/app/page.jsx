"use client";

import React, { Suspense, useContext, useEffect, useState } from "react";
import "./page.scss"
import { UserContext } from "@/store/UserContext";
import { redirect } from "next/navigation";
import Account from "./_account/page";
import { toast } from "react-toastify";

const HomePage = () => {
  const [isStarted, setIsStarted] = useState(false)
  const { auth } = useContext(UserContext)

  useEffect(() => {
    if (auth) {
      toast.success("Already loggedIn. Redirecting to the dashboard...")
      redirect("/dashboard")
    }
  }, [auth])

  return <div className="landingPage">
    <h1>Xperiento</h1>

    <button type='button' onClick={() => setIsStarted(false)}
      data-state={isStarted}
      className="back" > <i className="pi pi-arrow-left"></i> </button>
    {!isStarted ? <h3>Smart insights to improve your sales, marketing, customer retention & customer satisfaction.</h3>
      :
      <Suspense fallback={() => <p>Loading....</p>}>
        <Account />
      </Suspense>
    }
    {!isStarted && < button onClick={() => setIsStarted(true)} className="start" href="/account">Start</button>
    }
  </div >
};

export default HomePage;