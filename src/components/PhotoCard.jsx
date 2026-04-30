import Image from 'next/image';
import React from 'react';
import { HiHeart } from "react-icons/hi";
import { BiDownload} from "react-icons/bi";
import Link from 'next/link';
const PhotoCard = ({photo}) => {
    
    return (
        <div className='border border-gray-300 rounded-xl p-4'>
            <div className="relative w-full aspect-square">
<Image src={photo.imageUrl} 
           alt={photo.title} 
           fill
           sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
           className='rounded-xl'
           > 
            </Image> 
<div className="badge badge-soft font-medium absolute right-2 top-2">{photo.category}</div>

            </div>
           
            <div className="">
                <h2 className="font-medium">{photo.title}</h2>
            </div>
<div className="flex justify-between px-5">
<div className="flex items-center gap-1">
<p><HiHeart></HiHeart></p>
<p>{photo.likes}</p>
            </div>
            <div className="flex items-center gap-1">
<p><BiDownload></BiDownload></p>
<p>{photo.likes}</p>
            </div>
</div>
        <Link href={`/all-photos/${photo.id}`}>
         <button className="btn w-full rounded-full">View</button>
        </Link>
            

        </div>
    );
};

export default PhotoCard;