import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const installationsData = [
  {
    title: "Sucursal",
    description: "Nuestra sucursal fue diseñada con una infraestructura la cual da una percepción de la hermosa naturaleza que se encuentran en nuestros mares.",
    imageUrl: "https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/260367256_455420996115171_140238486980415349_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGh9y0gpWVd8JD67YMVGOfG3AVPnGXL-ircBU-cZcv6KkzTKN0FVIrCHeDXyQSbxGiVtuul1MeUng2PdcCjlWwl&_nc_ohc=RLpMpQuL8KMQ7kNvgG6WD8m&_nc_ht=scontent.ftij5-1.fna&oh=00_AYBOM65raESZqe-QbSzmt20DQEM2HZxw7ydN9Nr8mp9m0w&oe=665EBA5A"
  },
  {
    title: "Caja",
    description: "En el área de caja acuden todos nuestros clientes locales a recibir el mejor marisco que se puede encontrar en la costa.",
    imageUrl: "https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/261104186_455394072784530_2226475084703064686_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHYYDLa1pod52roopCfwAFwLjBhOS0Sm_guMGE5LRKb-DGr2j3Glr5u9Qmu7VVeEl8tBmQCOUryuvC7Hprkaq9U&_nc_ohc=3BojR5r9iPcQ7kNvgHfb8LH&_nc_ht=scontent.ftij5-1.fna&oh=00_AYC-OUQo0eEqhzugOUrhfOsAI9N5DS5RnZEvVzi-U1E2Bg&oe=665E9D20"
  },
  {
    title: "Oficinas",
    description: "Nuestras oficinas están diseñadas para fomentar la productividad y la colaboración entre equipos.",
    imageUrl: "https://scontent.ftij5-1.fna.fbcdn.net/v/t1.6435-9/104410404_173606097629997_1438317234327784125_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGo9H0uJEZDPxneewfrIDM14gk69wNGtqfiCTr3A0a2p0riLRTL65efOpexJXGs6HGNagJL_LxZrBr_v5ODRk1U&_nc_ohc=GkmGNyfeUdIQ7kNvgFJdGtW&_nc_ht=scontent.ftij5-1.fna&oh=00_AYCv33MQ714aE3-5lbaQXZr9dvR5BLUQKhc3IOGHHbqVwA&oe=668039AC"
  },
  {
    title: "Pesca",
    description: "Nuestro personal cuenta con años de experiencia en trabajar en el mar para brindar los mejores productos.",
    imageUrl: "https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/357405116_734115925386234_7244424777159838658_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFjM77oM-eVJ2yiTDRbgqgCcL7xItPxmmBwvvEi0_GaYNugGCctqBPj8vlVLZjmxihde2nY83nLu244IO0o6RH_&_nc_ohc=9FL_Sru-l4UQ7kNvgHnPhJ_&_nc_ht=scontent.ftij5-1.fna&oh=00_AYASxiIlFALRARz1MrUAIXOaXy6wkHUgYYxmvZFNYVWH0w&oe=665EB5BC"
  },
  {
    title: "Clientes",
    description: "Contamos con clientes que respaldan la calidad de nuestros servicios.",
    imageUrl: "https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/360157737_742209227910237_2702371129537979506_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFUNUfcRktq-XUrQ3OEcGIbIg0uqVjR4YciDS6pWNHhh6mc6RDhUpeoIrQA5R1JEANaL6HLV6sHzibC2alEg_rI&_nc_ohc=d47BQO3klOwQ7kNvgHp0YLf&_nc_ht=scontent.ftij5-1.fna&oh=00_AYALDHFWX8RMz15hQC_7yD8euGoA8_krRk8MdYSXmEXLYA&oe=665EA247"
  },
  {
    title: "Calidad",
    description: "Nuestro principal objetivo es proporcionar la calidad más premium que se pueda encontrar para llenar las espectativa de los paladares de nuestros mexicanos.",
    imageUrl: "https://scontent.ftij5-1.fna.fbcdn.net/v/t1.6435-9/136979676_253736729616933_45429184546673852_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE7v2ZZOg5fTnYouKUFeY0vB1vx05gTzV8HW_HTmBPNX_ER1EXIaPL4EYz03O4SC1g-KR9EaCJQQ4zA3zs537_N&_nc_ohc=33sXyGXNeiwQ7kNvgFmWmm3&_nc_ht=scontent.ftij5-1.fna&oh=00_AYAlydKl648kxX0aYimmDul6BRq4Sowi6uc2HZqyP1yXXA&oe=66804568"
  }
];

const Installations = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navigation />
      </header>
      <main className="flex-grow flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl font-bold mb-8">Nuestras Instalaciones</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {installationsData.map((installation, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
              <img src={installation.imageUrl} alt={installation.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{installation.title}</h2>
                <p>{installation.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Installations;
