import ProviderCard from "@/components/ProviderCard";
import { Container } from "@/library/Container";
import { useState } from "react";

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
    }
];

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
        <Container className="bg-brand-tan h-screen">
            <div className="max-w-md mx-auto">
                <div>
                    <h1 className="text-2xl font-bold pt-4 pb-2">Providers Near You</h1>
                    <div>
                        <button onClick={handlesetListView} className={`bg-white p-3 mr-2 rounded-md ${listView && 'bg-gray-100 border border-black'}`}>List View</button>
                        <button onClick={handlesetListView} className={`bg-white p-3 rounded-md ${!listView && 'bg-gray-100 border border-black'}`}>Map View</button>
                    </div>
                </div>
                <div>
                    {listView && 
                        (<div>
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
                            </div>
                        )}
                </div>
            </div>
        </Container>
    )
};