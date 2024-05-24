import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SpaceContainer.css";
import direction from "../../assets/logos/direction.jpg";
import stroke from "../../assets/logos/stroke.jpg";
import premium from "../../assets/premium.jpg";
import platinum from "../../assets/platinum.jpg";
import workspace from "../../assets/workspace.jpg";
import honey from "../../assets/honeykomb.jpg";
import campus from "../../assets/campus.jpg";

interface Item {
  id: string;
  name: string;
  day_pass_price: number;
  images: string;
  day_pass_discounts_percentage: {
    [key: number]: {
      value: number;
      message?: string;
    };
  };
  imagePath:string;
  imageName:string;
}

const SpaceContainer: React.FC = () => {
  const [data, setData] = useState<Item[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error, "Error fetching data");
      }
    };
    fetchData();
  }, []);

  const smallImages = [
    {imagepath:workspace, imageName:"Workspace"},
    {imagepath:platinum, imageName:"Platinum"},
    {imagepath:premium, imageName:"Premium"},
    {imagepath:campus, imageName:"Campus"},
    {imagepath:honey, imageName:"HoneyKomb"},
  ];
  return (
    <section className="space-container">
      <Container>
        <Row>
          <Col>
            <h2 className="mb-4 mt-5">Our Space Overview</h2>
          </Col>
        </Row>
        <Row>
          {data?.map((item: Item, index: number) => (
            <Col xs={12} sm={12} md={6} lg={4} key={item.id} className="mb-3">
              <div className="space-innercontainer">
                <div className="name-kms">
                  <h6 className="item-name">{item.name}</h6>
                  <div className="km-container">
                    <img
                      src={direction}
                      alt="direction"
                      className="direction"
                    />
                    <span>6kms</span>
                  </div>
                </div>
                <div className="image-container">
                  <div className="smallimage-container">
                    <img src={smallImages[index % smallImages.length].imagepath} alt="small" className="smallimage" />
                    <span>{smallImages[index % smallImages.length].imageName}</span>
                  </div>
                  <img src={item.images} alt="image1" className="space-images" />
                </div>
                <div className="pricing-container">
                  <button className="daypass-container">
                    <div className="d-flex flex-column">
                      <p className="daypass">Day Pass</p>
                      <p className="daypass-price">
                        <span className="itemprice">
                          ₹ {item.day_pass_price}
                        </span>
                        /Day
                      </p>
                    </div>
                    <div className="strokes-container">
                      <img
                        src={stroke}
                        alt="Stroke"
                        className="stroke lesser-stroke"
                      />
                      <img
                        src={stroke}
                        alt="Stroke"
                        className="stroke less-stroke"
                      />
                      <img src={stroke} alt="Stroke" className="stroke" />
                    </div>
                  </button>
                  <button className="bulk-container">
                    <div className="d-flex flex-column">
                      <p className="daypass bulkpass">Bulk Pass</p>
                      <p className="daypass-price bulkpricing">
                        <span className="itemprice">₹2400</span>/10Days
                      </p>
                      <span className="discount">
                        {item.day_pass_discounts_percentage[10].value}% Discount
                      </span>{" "}
                      {/* Move this line inside the div */}
                    </div>
                    <div className="strokes-container">
                      <img
                        src={stroke}
                        alt="Stroke"
                        className="stroke lesser-stroke"
                      />
                      <img
                        src={stroke}
                        alt="Stroke"
                        className="stroke less-stroke"
                      />
                      <img src={stroke} alt="Stroke" className="stroke" />
                    </div>
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SpaceContainer;
