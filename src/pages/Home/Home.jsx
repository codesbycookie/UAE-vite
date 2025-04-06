import "./Home.css";
import CrossCards from "./components/CrossCards/CrossCards";
import VerticalCards from "./components/VerticalCards/VerticalCards";
import {content} from '../../utils/Content.jsx'

export default function Home() {

  const {home_page} = content;
  
  console.log(home_page.card_contents)

  return (
    <div className="Home home_page" id="home_section">
      <div className="text-center">
      <div className="content text-center  d-flex justify-content-center align-items-center flex-column gap-5">
        <h2 className="Title">
         {home_page.title[0]}<span>{home_page.title[1]}</span>{home_page.title[2]}
        </h2>
        <h2 className="para">
        {home_page.description}
        </h2>
      </div>
      </div>

      <div className="pt-5 d-md-none d-lg-block d-xl-block d-md-block d-none position-relative">
        <div className="position-absolute end-0 d-flex flex-column align-items-end" style={{ right: "20px" }}>
          {/* Large Circle */}
          <div
            style={{
              height: "200px",
              width: "200px",
              backgroundColor: "#041D60",
              borderRadius: "50%",
              // marginBottom: "0px",
              marginRight:"50px",
            }}
          ></div>
          
          {/* Small Circle */}
          <div
            style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#F27A0A",
              borderRadius: "50%",
              marginRight: "20px", 
            }}
          ></div>
        </div>

        <div className="circle position-absolute top-50 start-0">
          <div
            style={{
              height: "600px",
              width: "600px",
              backgroundColor: "#041D60",
              borderRadius: "50%",
              right: "500px",
            }}
          ></div>
        </div>
        <div className="circle position-absolute bottom-0 end-0">
          <div
            style={{
              height: "400px",
              width: "400px",
              backgroundColor: "#F27A0A",
              borderRadius: "50%",
              right: "500px",
            }}
          ></div>
        </div>
        <CrossCards contents={home_page.card_contents}/>
      </div>

      <div className="pt-5 d-md-block d-lg-none d-xl-none d-block">
        <VerticalCards contents={home_page.card_contents}/>
      </div>
    </div>
  );
}
