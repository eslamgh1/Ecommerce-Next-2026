import React from "react";

type ProductDetailsPropsType = {
    params: {
        id: string;
    };
};

export default function ProductDetails(props : ProductDetailsPropsType) {
    console.log(props.params.id);
    
    return <div>productDetails</div>;
}