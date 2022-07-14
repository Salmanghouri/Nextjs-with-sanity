import React from 'react'
import imageUrlBuilder from '@sanity/image-url';
import { useState } from 'react';
import { useEffect } from 'react';
import { sanityClient } from '../../sanity';



export const Post = ({title, image, body}) => {

    const [imageUrl, setImageUrl] = useState('');

    useEffect(()=>{
        const imgBuilder = imageUrlBuilder({
            projectId: 'imu39qh0',
            dataset: 'production',
        });

        setImageUrl(imgBuilder.image(image));
    }, [image] );

    console.log(title);
  return (
    <div>
    <h1 className="font-bold mx-4">{title}</h1>
    <div>
    {imageUrl && <img src={imageUrl}/>}
   
    </div>

    <div>

       

    </div>
    </div>
  )
};

export const getServerSideProps = async pageContext => {
    const pageSlug = pageContext.query.slug;
    
    if(!pageSlug) {
        return {
            notFound:true
        }
    }

    const query = encodeURIComponent(`*[ _type == "agent"  && slug.current == "${pageSlug}" ]`);
    const url = `https://imu39qh0.api.sanity.io/v1/data/query/production?query=${query}`;

    
    
    const result = await fetch(url).then(res => res.json());
    const agent = result.result[0];

    if (!agent) {
         return {
            notFound: true
         }
    }else {
        return {
            props: {
                title: agent.title,
                image: agent.image,
              
            }
        }
    }
};

export default Post