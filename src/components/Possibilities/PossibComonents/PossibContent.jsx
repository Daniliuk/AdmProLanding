import BidderContentCss from "./Tabs.module.css";
import img1 from "./8918702_4020767.svg";
import img2 from "./11668491_20943599.jpg";
import img3 from "./12953772_Jan-Business_report_1.jpg";
import NoDisain from './FuckUp.svg'

export function BidderContent() {
  return (
    <div className={BidderContentCss.ContentBox}>
      <div className={BidderContentCss.TextBox}>
        <div className={BidderContentCss.Paragraph}>Описание Bidder</div>
      </div>

      <div className={BidderContentCss.ImgBox}>
        {/* <img
          className={BidderContentCss.Img}
          src="https://picsum.photos/seed/picsum/580/580"
          alt=""
        /> */}
        <img className={BidderContentCss.img1} src={NoDisain} alt="" />
      </div>
    </div>
  );
}

export function SelectionPhrasesContent() {
  return (
    <div className={BidderContentCss.ContentBox}>
      <div className={BidderContentCss.TextBox}>
        <div className={BidderContentCss.Paragraph}>
          Описание SelectionPhrases
        </div>
      </div>

      <div className={BidderContentCss.ImgBox}>
        {/* <img
          className={BidderContentCss.Img}
          src="https://picsum.photos/seed/picsum/580/580"
          alt=""
        /> */}
        <img className={BidderContentCss.img2} src={NoDisain} alt="" />
      </div>
    </div>
  );
}

export function StatisticsAnalysisContent() {
  return (
    <div className={BidderContentCss.ContentBox}>
      <div className={BidderContentCss.TextBox}>
        <div className={BidderContentCss.Paragraph}>
          Описание StatisticsAnalysis
        </div>
      </div>

      <div className={BidderContentCss.ImgBox}>
        {/* <img
          className={BidderContentCss.Img}
          src="https://picsum.photos/seed/picsum/580/580"
          alt=""
        /> */}
        <img className={BidderContentCss.img2} src={NoDisain} alt="" />
      </div>
    </div>
  );
}

export function ChatGPTContent() {
  return (
    <div className={BidderContentCss.ContentBox}>
      <div className={BidderContentCss.TextBox}>
        <div className={BidderContentCss.Paragraph}>Описание ChatGPT</div>
      </div>

      <div className={BidderContentCss.ImgBox}>
        {/* <img
          className={BidderContentCss.Img}
          src="https://picsum.photos/seed/picsum/580/580"
          alt=""
        /> */}
        <img className={BidderContentCss.img2} src={NoDisain} alt="" />
        
      </div>
    </div>
  );
}

// export default BidderContent;
