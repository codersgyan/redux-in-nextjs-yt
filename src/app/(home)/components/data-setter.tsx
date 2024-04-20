'use client';
import { add } from '@/lib/store/features/product/productSlice';
import { useAppDispatch } from '@/lib/store/hooks';
import React, { useEffect } from 'react';

const DateSetter = ({ data }: { data: any }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(add(data));
    }, [data, dispatch]);

    return <></>;
};

export default DateSetter;
