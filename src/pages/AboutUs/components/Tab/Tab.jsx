/* eslint-disable react/prop-types */
import "./Tab.css";

export default function Tab({
  title = '',
  right_pic = false,
  img = '',
  content = '',
  is_title = false,
  is_content = false,
  is_main_page = false,
}) {
  if(!is_main_page){
    if (is_title) {
      return (
        <div className="tab_container">
          <div className="title_tag d-flex justify-content-center align-items-center row g-0">
            <div className="col d-flex justify-content-start">
              <div className="left_line"></div>
            </div>

            <div className="col d-flex justify-content-center">
              {" "}
              <h2 className="tab_title">
                {title}
              </h2>
            </div>

            <div className="col d-flex justify-content-end ">
              <div className="right_line"></div>
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div className="tab_container">
        <div className="title_tag d-flex justify-content-center align-items-center row g-0 mb-0">
          <div className="col">
            <div className="left_line"></div>
          </div>
          <div className="col ">
            {" "}
            <h2 className="tab_title d-flex justify-content-center align-items-center">
            {title}
            </h2>
          </div>
          <div className="col d-flex justify-content-end">
            <div className="right_line"></div>
          </div>
        </div>
        <div className="tab_contents row g-0 d-flex align-items-center">
      {!is_content ? (
        right_pic ? (
          <>
            {/* Left: Text | Right: Image */}
            <div className="col-md-7 order-2 order-md-1 p-4 d-flex justify-content-center align-items-center flex-column " id="contentD">
              <div className="content mb-1">
                <h3 className="mb-0">{content}</h3>
              </div>
            </div>
            <div className="col-md-5 order-1 order-md-2 d-flex justify-content-center align-items-center">
              <img src={img} className="tab_img rounded img-fluid" alt="tab" />
            </div>
          </>
        ) : (
          <>
            {/* Left: Image | Right: Text */}
            <div className="col-md-5 order-1 order-md-1 d-flex justify-content-center align-items-center">
              <img src={img} className="tab_img rounded img-fluid" alt="tab" />
            </div>
            <div className="col-md-7 order-2 order-md-2 d-flex justify-content-center align-items-center flex-column p-4">
              <div className="content mb-1">
                <h3 className="mb-0">{content}</h3>
              </div>
            </div>
          </>
        )
      ) : (
        // Full-Width Content
        <div className="col-12 p-4 d-flex justify-content-center align-items-center text-center">
          <div className="tab_content_paragraph">{content}</div>
        </div>
      )}
    </div>
      </div>
    );
  }
}