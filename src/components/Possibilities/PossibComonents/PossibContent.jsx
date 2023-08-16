import BidderContentCss from "./Tabs.module.css";
// import NoDisain from './FuckUp.svg'
import BidderImg from './Posibili_Bidder.svg'
import PhrasesImg from './Posibili_Phrases.svg'
import StatisticImg from './Posibili_Statistic.svg'
import GptImg from './Posibili_GPT.svg'


export function BidderContent() {
  return (
    <div className={BidderContentCss.ContentBox}>
      <div className={BidderContentCss.TextBox}>
        <div className={BidderContentCss.Paragraph}>Описание Bidder</div>
      </div>

      <div className={BidderContentCss.ImgBox}>
        <img className={BidderContentCss.img1} src={BidderImg} alt="" />
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
        <img className={BidderContentCss.img2} src={PhrasesImg} alt="" />
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
        <img className={BidderContentCss.img2} src={StatisticImg} alt="" />
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

        <img className={BidderContentCss.img2} src={GptImg} alt="" />
        
      </div>
    </div>
  );
}

// export default BidderContent;
