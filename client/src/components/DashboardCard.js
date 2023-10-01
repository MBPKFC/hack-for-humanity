import React from 'react'
import { cn } from '@/utils/cn'

const DashboardCard = ({ title, count, percentChange, icon }) => {
    return (
        <div className='flex flex-col bg-white w-full sm:max-w-lg rounded-md shadow-md hover:shadow-xl hover:scale-[103%] transition-all duration-200 cursor-pointer p-6'>
            <div className='flex justify-between mb-4'>
                <span className='font-bold text-slate-500'>{title}</span>
                {percentChange ? (
                    <span className={cn(['font-medium px-2 rounded-md', { 'bg-green-50 text-green-600': percentChange > 0 },
                        { 'bg-red-50 text-red-600': percentChange < 0 }
                    ])}>{percentChange > 0 ? `+${parseFloat(percentChange, 2) * 100}` : parseFloat(percentChange, 2) * 100}%</span>) : null
                }
            </div>
            <div className='flex items-end justify-between'>
                <span className='text-6xl font-bold'>{count}</span>
                {icon ? icon : null}
            </div>

        </div>
    )
}

export default DashboardCard