import Image from "next/image"

async function getDetailPort(id) {
    let detailPort = await fetch(`https://dummyjson.com/products/${id}`);
    //   console.log({detailProduct: detailPort});
    return detailPort.json();
  }

  export default async function Page({ params }) {
    const detail = await getDetailPort(params.id);
    // console.log({detailProduct: detail})
    return (
      <div>
        <Image src={detail.images[1]} alt={detail.images[2]} width={400} height={400}></Image>
        <p>Merk: {detail.brand}</p>
        <p>Seri: {detail.title}</p>
        <p>Category: {detail.category}</p>
        <p>Rating: {detail.rating}</p>
        <p>Stock: {detail.stock}</p>
        <p>Price: {detail.price}</p>
        <p>Description: {detail.description}</p>
      </div>
    );
  }
