import ProviderCard from "@/components/ProviderCard";
import { Container } from "@/library/Container";
import { useState } from "react";
import { Stethoscope } from "@phosphor-icons/react";
import Slider from "react-slick";

const dataObjects = [
    {
        "name": "Marissa L. Cooper, MD",
        "address": "1112 Southgate Ct Miami, FL",
        "contact": "305-555-8575",
        "distance": "1.6 MI"
    },
    {
        "name": "Jonathan Stevenson, MD",
        "address": "6000 S Washington St Miami, Fl",
        "contact": "305-555-3725",
        "distance": "2.5 MI"
    },
    {
        "name": "Rachel G. Roberts, MD",
        "address": "943 Pennsylvania Dr Miami, Fl",
        "contact": "305-555-2332",
        "distance": "4.8 MI"
    },
    {
        "name": "Anique Bryan, MD",
        "address": "3801 Biscayne Blvd # 100, Miami, FL",
        "contact": "305-571-0620",
        "distance": "5.7 MI"
    },
    {
        "name": "Yael D. Myers, MD",
        "address": "21550 Biscayne Blvd, Aventura, FL 33180",
        "contact": "305-792-0555",
        "distance": "9.0 MI"
    },
    {
        "name": "Yael D. Myers, MD",
        "address": "21550 Biscayne Blvd, Aventura, FL 33180",
        "contact": "305-792-0555",
        "distance": "9.0 MI"
    }
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

export default function Providers () {

    const [listView, setListView] = useState(true);

    function handlesetListView(){
        if(listView === true){
            setListView(false);
        } else {
            setListView(true);
        }
    };

    return (
        <Container className="pt-4">
            <div className="max-w-md mx-auto">
                <div>
                <div className="flex gap-3 items-center text-2xl font-bold mb-4 ">
                    <span className="bg-white p-2 rounded-full">
                    <Stethoscope size={32} />
                    </span>
                    <span>Find a Provider Near You</span>
                </div>
                    <div>
                        <button onClick={handlesetListView} className={`bg-white p-3 mr-2 rounded-md ${listView && 'bg-gray-100 border border-black'}`}>List View</button>
                        <button onClick={handlesetListView} className={`bg-white p-3 rounded-md ${!listView && 'bg-gray-100 border border-black'}`}>Map View</button>
                    </div>
                </div>
                <div>
                    {listView && 
                        (<div className="h-screen overflow-scroll">
                            {dataObjects.map((object, index) => {
                            return (
                                <ProviderCard key={index} name={object.name} address={object.address} contact={object.contact} distance={object.distance}/>
                            )
                        })}
                    </div>)}
                    {!listView &&
                        (
                            <div>
                                <div className="rounded-md my-4">
                                    <img className="rounded-md" src="https://www.google.com/maps/d/thumbnail?mid=1y4n7xZTmr8B3sDp674AeoQdtyU4"></img>
                                </div>
                                <div>
                                    <ProviderCard 
                                    name={dataObjects[0].name}
                                    address={dataObjects[0].address}
                                    contact={dataObjects[0].contact}
                                    distance={dataObjects[0].distance}
                                    ></ProviderCard>
                                </div>
                                <div className="flex justify-between w-[40px] mx-auto">
                                    <button className="w-[8px] h-[8px] bg-black rounded-full"></button>
                                    <button className="w-[8px] h-[8px] bg-gray-300 rounded-full"></button>
                                    <button className="w-[8px] h-[8px] bg-gray-300 rounded-full"></button>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </Container>
    )
};