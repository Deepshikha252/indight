import PostCard from "@/components/ui/dashboard/PostCard/PostCard";

import Link from "next/link";
import "./styles.scss"
import Image from "next/image";
import LikeDislikeFooter from "@/components/ui/dashboard/PostCard/LikeDislikeFooter";
import { server_base_Url } from "@/utils/temp_tokenKey";
import {cardget} from '@/utils/api';
const MyInsightsPage = async () => {
  const req = await cardget(server_base_Url + "insights")
  const res = req.data

  return (
    <div className='MyInsights'>
      <div className="header">
        <div className="title">
          <h3> <span>
            SMART INSIGHTS TO
          </span>
            <br />
            Transform Your Business</h3>
        </div>
        <div className="flex">
          <Image
            src={"/assets/dashboard/restaurant.png"}
            height={60} width={60} alt='restaurant' />
          <Image
            src={"/assets/dashboard/cafe.png"}
            height={60} width={60} alt='cafe' />
        </div>
      </div>
      <div className="latestInsights">
        <div className="list">
          {res?.data?.map((insight, i) => {
            return <PostCard footer={<LikeDislikeFooter />} key={i} data={insight} />
          })}
          <div className="centered">
            <button style={{
              margin: 0
            }} className='start'>
              <Link style={{ textDecoration: "none", color: "inherit" }} href="/dashboard/my_insights">
                Load More
              </Link>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MyInsightsPage;
