import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "next-share";
import { usePathname } from "next/navigation";

const ShareContainer = ({ data }) => {
  const pathname = usePathname();
  const siteUrl = "http://localhost:3000";

  return (
    <div className="pt-[1%] pb-[1%] md:pb-0  mb-[4%] md:mb-0 mt-[4%] border-t-2 border-grey border-b-2 md:border-b-0">
      <div className="flex flex-wrap justify-between gap-2">
        <div className="desc">
          <h4 className="text-colorRedLight font-semibold mb-1">Written by:</h4>
          <p className=" font-semibold">{data?.authorName}</p>
          <p>Healthy lifestyle Edge</p>
        </div>
        <div className="desc">
          <h4 className="text-colorRedLight font-semibold mb-1">Updated at:</h4>
          <p>{data?.updateDate}</p>
        </div>
        <div className="desc">
          <h4 className="text-colorRedLight font-semibold mb-1">Share with:</h4>
          <ul className="flex flex-row gap-2">
            <li>
              <FacebookShareButton url={`${siteUrl}${pathname}`}>
                <FacebookIcon size={30} round />
              </FacebookShareButton>
            </li>
            <li>
              <TwitterShareButton url={`${siteUrl}${pathname}`}>
                <TwitterIcon size={30} round />
              </TwitterShareButton>
            </li>
            <li>
              <EmailShareButton url={`${siteUrl}${pathname}`}>
                <EmailIcon size={30} round />
              </EmailShareButton>
            </li>
            <li>
              <LinkedinShareButton url={`${siteUrl}${pathname}`}>
                <LinkedinIcon size={30} round />
              </LinkedinShareButton>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShareContainer;
