'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const NewsPage = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(
            'https://content.guardianapis.com/search?api-key=cb5c8f1d-41e3-4481-b13e-7b075cf3e537&show-fields=thumbnail,headline,byline,bodyText'
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setNews(data.response.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h2>뉴스</h2>
            <ul className='divide-y px-5'>
                {news.map((item, index) => (
                    <li key={item.id}>
                        <Link href={'/'} className='py-2 block'>
                            <Image src={item.fields.thumbnail} alt={item.webTitle} width={300} height={300} />
                            <strong>{item.webTitle}</strong>
                            <p className='text-gray-500 text-sm'>{item.webPublicationDate}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsPage;
