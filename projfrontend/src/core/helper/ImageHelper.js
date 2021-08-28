import React from 'react'
import { API } from '../../backend';

const ImageHelper = ({product}) => {
  const imageurl = product 
    ? `${API}/product/photo/${ product._id }` 
    : `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcz_RItfZ9o4vctc_Cydhf-RMAN06s_2SLr_6cDylmyZUT348V&usqp=CAU`

    return (
        <div className="rounded border border-success p-2">
                <img
                  src={ imageurl }
                  alt="photo"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  className="mb-3 rounded"
                />
        </div>
    )
}

export default ImageHelper;