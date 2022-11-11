import Link from "next/link";

async function takePortfolio() {
  const products = await fetch("https://dummyjson.com/products");
  return products.json();
}

async function takeHello() {
  const hello = await fetch("http://localhost:3000/api/hello");
  return hello.json();
}

export default async function Layout({ children }) {
  const { products } = await takePortfolio();
  const { datas } = await takeHello();
  console.log(datas);
  return (
    <div>
      {products.map((product) => (
        <>
          <div key={product.id}>
            <Link href={`/portfolio/${product.id}`}>
              No. {product.id} - {product.title}
            </Link>
            <p>{product.description}</p>
          </div>
        </>
      ))}
      <hr />
      <div>{children}</div>
    </div>
  );
}
