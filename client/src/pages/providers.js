import { useState } from "react";
import Slider from "react-slick";
import { Stethoscope } from "@phosphor-icons/react";
import ProviderCard from "@/components/ProviderCard";
import { Container } from "@/library/Container";

const dataObjects = [
  {
    name: "Marissa L. Cooper, MD",
    address: "1112 Southgate Ct Miami, FL",
    contact: "305-555-8575",
    distance: "1.6 MI",
  },
  {
    name: "Jonathan Stevenson, MD",
    address: "6000 S Washington St Miami, Fl",
    contact: "305-555-3725",
    distance: "2.5 MI",
  },
  {
    name: "Rachel G. Roberts, MD",
    address: "943 Pennsylvania Dr Miami, Fl",
    contact: "305-555-2332",
    distance: "4.8 MI",
  },
  {
    name: "Anique Bryan, MD",
    address: "3801 Biscayne Blvd # 100, Miami, FL",
    contact: "305-571-0620",
    distance: "5.7 MI",
  },
  {
    name: "Yael D. Myers, MD",
    address: "21550 Biscayne Blvd, Aventura, FL 33180",
    contact: "305-792-0555",
    distance: "9.0 MI",
  },
  {
    name: "Yael D. Myers, MD",
    address: "21550 Biscayne Blvd, Aventura, FL 33180",
    contact: "305-792-0555",
    distance: "9.0 MI",
  },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

export default function Providers() {
  const [listView, setListView] = useState(true);

  function handlesetListView() {
    if (listView === true) {
      setListView(false);
    } else {
      setListView(true);
    }
  }

  return (
    <Container className="pt-4">
      <div className="mx-auto max-w-md">
        <div>
          <div className="mb-4 flex items-center gap-3 text-2xl font-bold ">
            <span className="rounded-full bg-white p-2">
              <Stethoscope size={32} />
            </span>
            <span>Find a Provider Near You</span>
          </div>
          <div>
            <button
              onClick={handlesetListView}
              className={`mr-2 rounded-md bg-white p-3 ${
                listView && "border border-black bg-gray-100"
              }`}>
              List View
            </button>
            <button
              onClick={handlesetListView}
              className={`rounded-md bg-white p-3 ${
                !listView && "border border-black bg-gray-100"
              }`}>
              Map View
            </button>
          </div>
        </div>
        <div>
          {listView && (
            <div className="h-screen overflow-scroll">
              {dataObjects.map((object, index) => {
                return (
                  <ProviderCard
                    key={index}
                    name={object.name}
                    address={object.address}
                    contact={object.contact}
                    distance={object.distance}
                  />
                );
              })}
            </div>
          )}
          {!listView && (
            <div>
              <div className="my-4 rounded-md">
                <img
                  className="rounded-md"
                  src="https://www.google.com/maps/d/thumbnail?mid=1y4n7xZTmr8B3sDp674AeoQdtyU4"
                />
              </div>
              <Slider {...settings}>
                {dataObjects.map((object, index) => {
                  return (
                    <ProviderCard
                      key={index}
                      name={object.name}
                      address={object.address}
                      contact={object.contact}
                      distance={object.distance}
                    />
                  );
                })}
              </Slider>

            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
