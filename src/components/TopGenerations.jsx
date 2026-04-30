import React from 'react';
import PhotoCard from './PhotoCard';

const TopGenerations = async() => {
    const res = await fetch("https://ai-pic-generation-app-vwe2.vercel.app/data.json")
    const photos = await res.json()
    const topPhotos = photos.slice(0,8)
    return (
        <div>
            <h1 className="text-2xl font-bold mt-5">Top Generations</h1>
            <div className='grid grid-cols-4 gap-3'>
                {topPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)}
            </div>
        </div>
    );
};

export default TopGenerations;