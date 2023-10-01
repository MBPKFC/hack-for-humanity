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

    const [view, setView] = useState('List');

    return (
        <Container className="bg-brand-tan h-screen">
            <div className="max-w-md mx-auto">
                <div>
                    <h1 className="text-2xl font-bold pt-4 pb-2">Providers Near You</h1>
                    <div>
                        <button>List View</button>
                        <button>Map View</button>
                    </div>
                </div>
                <div>
                    {view === 'List' && 
                        (<div>
                            {dataObjects.map((object, index) => {
                            return (
                                <ProviderCard key={index} name={object.name} address={object.address} contact={object.contact} distance={object.distance}/>
                            )
                        })}
                    </div>)}
                    {view === 'Map' &&
                        (
                            <div>
                                <p>Google Map View</p>
                            </div>
                        )}
                </div>
            </div>
        </Container>
    )
};