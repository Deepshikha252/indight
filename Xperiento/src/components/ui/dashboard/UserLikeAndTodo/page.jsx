"use client";

import { UserContext } from "@/store/UserContext";
import { useContext } from "react";
import InsightsCard from "../InsightsCard";


const MyTodoAndLikeCount = () => {
  const { auth } = useContext(UserContext)
  return (
    <div className="overLook">
      <InsightsCard insightNumber={auth?.todo?.length || 0} label="To-Do" />
      <InsightsCard insightNumber={auth?.liked?.length || 0} label="Liked" />
    </div>
  );
};

export default MyTodoAndLikeCount;
