import PostCard from "@/components/ui/dashboard/PostCard/PostCard";
// import Link from "next/link";
import "./styles.scss"

import Image from "next/image";
import TodoPostFooter from "@/components/ui/dashboard/PostCard/TodoFooter";

const ActionsPage = () => {
  return (
    <div className='MyInsights'>
      <div className="header">
        <div className="title">
          <h3> <span>
            MY LIST
          </span>
            <br />
            Ideas to Implement</h3>
        </div>
      </div>
      <div className="latestInsights">
        <div className="list">
          {Array.from({ length: 10 }, (_v, id) => {
            return <PostCard key={id} footer={<TodoPostFooter />} />
          })}
          {/* <div className="centered">
            <button style={{
              margin: 0
            }} className='start'>
              <Link style={{ textDecoration: "none", color: "inherit" }} href="/dashboard/my_insights">
                Load More
              </Link>
            </button>
          </div> */}
        </div>
      </div>

    </div>
  );
};

export default ActionsPage;
