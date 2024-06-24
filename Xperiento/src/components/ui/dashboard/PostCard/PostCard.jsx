import { formatDate } from "@/utils/timeFormatter";
import "./PostCard.scss";

const PostCard = ({ key, data, isIconsVisible, iconOnLeft = false,
    footer, }) => {
    const {
        industrySegment,
        insightCategory,
        insightSubCategory,
        iconURL,
        insightDataURL,
        insightLevel,
        insightTitle,
        insightDescription,
        insightActionItem,
        actionItemExample, createdAt
    } = data || {
        industrySegment: "Restaurant",
        insightCategory: "Behaviour",
        insightSubCategory: "Promotion",
        iconURL: "/pro",
        insightDataURL: "xyz",
        insightLevel: "All",
        insightTitle: "Promotion Title2",
        insightDescription: "Insight Description:2",
        insightActionItem: "Insight Action Item:",
        actionItemExample: " Insight Description: Insight Description: Insight Action Item: Insight Action Item: Action Item Example:",
        author: "6672d2340e284cefdb471f84",
        likes: [],
        dislikes: [],
        comments: [],
        totalBookmarks: 0,
        implementNumber: 0,
    }
    const time = formatDate(createdAt)

    return (
        <div key={key} className="PostCard">
            <div className={iconOnLeft ? "head left" : "head"}>
                <div className="headTitleAndTime">
                    <p>{insightSubCategory}</p>
                    <time className="time">
                        {time || " Jun 5th 2024 12 22 PM"}
                    </time>
                </div>
            <i className='pi pi-megaphone'></i>
            </div>
            <div className="body">
                <h1 className="post_title">
                    {insightTitle}
                </h1>
                <div className="action">
                    <div className="action_head">
                        <p className='star'>
                            Action
                        </p>
                        <p className='action_title'>
                            {insightActionItem}
                        </p>
                    </div>

                    <p className="example">
                        For example
                        {actionItemExample}
                    </p>
                </div>
            </div>
            {footer}
        </div>
    )
}

export default PostCard