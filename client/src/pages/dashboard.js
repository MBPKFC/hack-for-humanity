import React, { useEffect, useState } from 'react'
import DashboardCard from '@/components/DashboardCard'
import { MapTrifold, User } from '@phosphor-icons/react'
import { getVIPData } from '@/utils/API'

export default function dashboard() {

    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getVIPData();
                if (!res.ok) {
                    throw new Error("something went wrong!");
                }
                const data = await res.json();
                setData(data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();

    }, [])

    return (
        <div className='flex flex-col p-4'>
            <div className="flex flex-row justify-between border-b border-gray-300 pb-4">
                <h1 className='text-3xl font-bold'>Dashboard</h1>
                <select className='bg-white border border-gray-300 rounded-md px-4'>
                    <option>Last 30 days</option>
                    <option>Last 60 days</option>
                    <option>Last 90 days</option>
                </select>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <DashboardCard icon={<User size={48} weight='duotone' color="#b0b0b0" />} title='Daily Sessions' count='2312' percentChange={0.12} />
                <DashboardCard icon={<MapTrifold size={48} weight='duotone' color="#b0b0b0" />} title='Top ZIP Code' count={data?.topZip ? data.topZip : '-'} />
                <DashboardCard icon={<MapTrifold size={48} weight='duotone' color="#b0b0b0" />} title='Top ZIP Code' count={data?.topZip ? data.topZip : '-'} />
                <DashboardCard icon={<MapTrifold size={48} weight='duotone' color="#b0b0b0" />} title='Top ZIP Code' count={data?.topZip ? data.topZip : '-'} />
            </div>


        </div>
    )
}
