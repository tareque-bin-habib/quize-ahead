import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizeQuestions = () => {
    const quizes = useLoaderData();
    console.log(quizes)
    return (
        <div>
            <h2 className='text-center'>Quize of {quizes.data.name}</h2>
        </div>
    );
};

export default QuizeQuestions;