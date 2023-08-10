import BidderContentCss from './Tabs.module.css'

export function BidderContent() {
  return (
    <div className={BidderContentCss.ContentBox}>
      <div className={BidderContentCss.TextBox}>
        <div className={BidderContentCss.Paragraph}>
          Описание Bidder
        </div>
      </div>

      <div className={BidderContentCss.ImgBox}>
        <img
          className={BidderContentCss.Img}
          src="https://picsum.photos/seed/picsum/580/580"
          alt=""
        />
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
        <img
          className={BidderContentCss.Img}
          src="https://picsum.photos/seed/picsum/580/580"
          alt=""
        />
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
        <img
          className={BidderContentCss.Img}
          src="https://picsum.photos/seed/picsum/580/580"
          alt=""
        />
      </div>
    </div>
  );
}

export function ChatGPTContent() {
  return (
    <div className={BidderContentCss.ContentBox}>
      <div className={BidderContentCss.TextBox}>
        <div className={BidderContentCss.Paragraph}>
          Описание ChatGPT
        </div>
      </div>

      <div className={BidderContentCss.ImgBox}>
        <img
          className={BidderContentCss.Img}
          src="https://picsum.photos/seed/picsum/580/580"
          alt=""
        />
      </div>
    </div>
  );
}

// export default BidderContent;
