
import Image from 'next/image';
import './styles.scss'
import InsightsCard from '@/components/ui/dashboard/InsightsCard';
import PostCard from '@/components/ui/dashboard/PostCard/PostCard';
import Link from 'next/link';
import { server_base_Url } from '@/utils/temp_tokenKey';
import MyTodoAndLikeCount from '@/components/ui/dashboard/UserLikeAndTodo/page';

import LikeDislikeFooter from "@/components/ui/dashboard/PostCard/LikeDislikeFooter";
import { getDashboard} from '@/utils/api'
const DashboardPage = async () => {

  const req = await fetch(server_base_Url + "insights/counts")
  if (req.status !== 200) {
    return <h1>Error </h1>
  }
  // const res = await req.json()
  // console.log(res);
  const test= await getDashboard();
const res = test.data
// console.log(data.data.data);
  const allInsightsCount = ["Marketing", "Behaviour", "Price", "Complaint", "Sales"]


  return (
    <div className='Dashboard'>
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
      <div className="Insights">
        {/* {allInsightsCount.map((label, i) => {
          return <InsightsCard key={i} insightNumber={res?.counts[label] || 0} label={label} />
        })} */}
        {/* USE THIS WHEN TO SHOW ONLY AVAILABLE INSIGHTS CATEGORY */}
        {Object.keys(res.counts).map((key, index) => (
          <InsightsCard key={index} insightNumber={res.counts[key]} label={key}  />
        ))}
      </div>
      <MyTodoAndLikeCount />
      <div className="latestInsights">
        <p className="latestInsights_title">LATEST INSIGHTS</p>
        <div className="list">
          {res?.data?.map((insight, i) => {
            return <PostCard key={i} data={insight} footer = {<LikeDislikeFooter />} />
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

export default DashboardPage;
