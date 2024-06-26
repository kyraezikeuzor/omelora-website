import ListIcon from './ListIcon'
import Link from 'next/link'
import Icon from './Icon'
import Button from './Button'
import {toDate, toPath} from '@/data/helpers' 
import {donateSiteLink} from '@/data/content'

type CampaignProps = {
    title:string;
    description:string;
    startDate:string;
    endDate:string;
    goalValue: number
    currentValue: number;
    measurement: string;
    orgsSupporting: string[]
    location:string;
    image:string;
}

/*
<div className='flex flex-row gap-4 items-center text-[--clr-grey-base]'>
                    <span className='flex flex-row'>
                        {orgsSupporting.map((item,index)=>(  
                        <span key={index} className='inline rounded-full bg-[--clr-green-base] h-6 w-6 flex flex-col items-center -mr-2'>
                            <Icon icon="Sun" className='inline fill-white' size='sm'/> 
                        </span>
                        ))}
                    </span>
                    <span className='text-xs'>
                        Supporting the {orgsSupporting.map((item,index)=>(<span key={index} className=''>{item}</span>))}
                    </span>
                </div>
 */

function ProgressBar({goalValue, currentValue}: {goalValue:number, currentValue:number}) {
    
    const percentage = `${(currentValue / goalValue) * 100}%`;

    return (
    <div className='w-full h-2 bg-[--clr-grey-light] rounded-xl'>
        <div 
        className='h-full justify-center bg-[--clr-green-light] rounded-xl ' 
        style={{width: percentage}}
        />
    </div>
    )
}

export default function Campaign({title, description, startDate, endDate, goalValue, currentValue, measurement, orgsSupporting, location, image}:CampaignProps) {
    return (
        <div className='relative flex flex-col justify-between border-2 border-[--clr-base-accent] bg-[--clr-base] rounded-xl shadow-md'>

            <img src={image} className='w-full object-cover h-40 rounded-t-xl'/>
            
            <div className='hidden absolute top-3 right-3'>
                <Icon icon='Share' className='fill-white'/>
            </div>

            <div className='w-full flex flex-col gap-4 px-5 py-4'>
                <div className='flex flex-col gap-2'>
                    <Link 
                    target="_blank" 
                    href={`/initiatives/${toPath(title)}`} 
                    className='font-bold text-xl lg:text-xl'>
                        {title} <Icon icon="ExternalLink" className='inline fill-[--clr-grey-base]' size='sm' />
                    </Link>
                    <span className='text-sm leading-2 text-[--clr-grey-base]'>
                        <span className=' font-semibold'>{location} • </span> <span>{description}</span>
                    </span>

                    <div className='flex flex-row justify-between text-sm text-[--clr-grey-base]'>
                        <span>
                            <span className="font-medium">Starts:</span> {toDate(startDate)}
                        </span>
                        <span>
                            <span className="font-medium">Ends:</span> {toDate(endDate)}
                        </span>
                    </div>
                </div>

                

                <div className='flex flex-row gap-2 items-center text-sm '>
                    <ProgressBar goalValue={goalValue} currentValue={currentValue}/>
                    <span className='flex flex-row gap-1 items-center font-medium'>
                        <span className='text-[--clr-grey-base]'>{currentValue}</span>
                        <span>/</span>
                        <span className='flex flex-row gap-1 items-center'><span>{measurement === "$" ? "$" : ''}{goalValue}</span> <span>{measurement !== '$' ? `${measurement}` : ''}</span></span>
                    </span>
                </div>
            </div>

            <div className='w-full flex flex-row items-center justify-between px-5 pb-5'>
                <Link href={donateSiteLink} className='w-full'>
                    <button className='w-full bg-[--clr-green-dark] rounded-full text-white text-base font-semibold py-1'>
                        Donate
                    </button>
                </Link>
            </div>
        </div>
    )
}