/* eslint-disable react/prop-types */
export default function VerticalCards({contents}) {
  console.log(contents)
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      {contents.map((card, index) => (
        <div key={index} className="w-100 d-flex flex-column align-items-center">
          <div className="card cross_card" style={{ width: '80%', maxWidth: '500px', height: 'calc(100% + 60px)', padding: '20px' }}>
            <div className="card-body-2 d-flex justify-content-center align-items-center flex-column text-center">
              <img src={card.img} className="vertical_card_img" alt="" style={{ marginBottom: '10px', maxWidth: '100px', height: '70px' }} />
              <h3 className='mb-3' style={{ color: 'black', fontSize: '1.5rem' }}>{card.title}</h3>
              <span style={{ fontSize: '1rem' }}>{card.desc}</span>
            </div>
          </div>
          {index !== 3 && <div className="vertical_line my-3" style={{ height: '50px', backgroundColor: '#041D60', width: '3px' }}></div>}
        </div>
      ))}
    </div>
  );
}
