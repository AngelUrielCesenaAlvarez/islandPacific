import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <div className="bg-slate-500 p-14 text-center">Imagen del header</div>
      <div className="flex justify-between p-10">
        <div>Logo coop</div>
        <div>Icono 1 Icono 2 Icono 3</div>
      </div>
      <div className="flex justify-center space-x-10  p-6  bg-[#03045E] text-[#fff] ">
        <Link href="/">Home</Link>
        <Link href="/pages/products">Products</Link>
        <Link href="/pages/installations">Installation</Link>
        <Link href="/pages/request">Request</Link>
      </div>
    </div>
  );
};

export default Navigation;
