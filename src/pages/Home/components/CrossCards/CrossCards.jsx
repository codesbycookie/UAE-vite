/* eslint-disable react/prop-types */
import "./CrossCards.css";

export default function CrossCards  ({ contents }) {
  return (
    <div className="row g-0 d-flex justify-content-center pt-5 position-relative">
      <div className="col-7 position-relative">
        <div className="back_card">
          <div
            className="card w-100 right_top_card"
            height="700"
            style={{ minHeight: "600px", paddingBottom: "15px" }}
          >
            <div className="card-body"></div>
          </div>
        </div>

        <div className="position-absolute top-0 start-0">
          <div
            className="card cross_card p-1"
            style={{ width: "300px", height: "316px", bottom: "100px" }}
          >
            <div
              className="card-body d-flex justify-content-center align-items-center flex-column"
              id="cross_card1"
            >
              <img src={contents[0].img} className="crosscard_img" alt="" />
              <h3 className="mb-1">{contents[0].title}</h3>
              <div className="cross_card_content text-center text-muted p-3 pb-4">
                <span style={{ fontSize: "20px" }}>{contents[0].desc}</span>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 end-0">
          <div
            className="card cross_card p-1"
            style={{
              width: "300px",
              height: "316px",
              left: "100px",
              top: "200px",
              zIndex: "1",
            }}
          >
            <div className="card-body d-flex justify-content-center align-items-center flex-column">
              <img src={contents[1].img} className="crosscard_img" alt="" />

              <h3 className="mb-1">{contents[1].title}</h3>
              <div className="cross_card_content text-center text-muted p-2">
                <span style={{ fontSize: "20px" }}>{contents[1].desc} </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 position-relative">
        <div className="back_card">
          <div className="card w-100 left_top_card" height="500px" style={{}}>
            <div className="card-body"></div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-0">
          <div
            className="card cross_card p-1"
            style={{
              right: "150px",
              top: "100px",
              zIndex: "1",
              width: "300px",
              height: "316px",
            }}
          >
            <div className="card-body  d-flex justify-content-center align-items-center flex-column">
              <img src={contents[2].img} className="crosscard_img" alt="" />

              <h3 className="mb-3">{contents[2].title}</h3>
              <div
                className="content cross_card_content text-center text-muted p-1"
                style={{ marginBottom: "5px", paddingBottom: "10px" }}
              >
                <span style={{ fontSize: "20px" }}> {contents[2].desc} </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-7 position-relative">
        <div className="back_card">
          <div className="card w-100 right_top_card" style={{}}>
            <div className="card-body"></div>
          </div>
        </div>
        <div className="position-absolute top-0 start-0"></div>
        <div className="position-absolute bottom-0 end-0">
          <div
            className="card cross_card p-1"
            style={{
              left: "150px",
              top: "100px",
              bottom: "300px",
              zIndex: "1",
              width: "300px",
              height: "316px",
            }}
          >
            <div className="card-body d-flex justify-content-center align-items-center flex-column">
              <img src={contents[3].img} className="crosscard_img" alt="" />

              <h3 className="mb-2 px-cus">{contents[3].title}</h3>
              <div className="cross_card_content text-center text-muted p-1">
                <span style={{ fontSize: "20px" }}> {contents[3].desc} </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

