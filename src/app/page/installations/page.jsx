import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const installationsData = [
  {
    title: "Sucursal",
    description:
      "Nuestra sucursal fue diseñada con una infraestructura la cual da una percepción de la hermosa naturaleza que se encuentran en nuestros mares.",
    imageUrl:
      "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/260367256_455420996115171_140238486980415349_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGvuxr8_6pALJRysQNz27Ru3AVPnGXL-ircBU-cZcv6KixGo-KnSJB-pC9MCXpS12EPOHbgkEf6EvwzqKQPwKpR&_nc_ohc=r3f5UB-WTBIQ7kNvgF-cRCU&_nc_ht=scontent-sjc3-1.xx&oh=00_AYA79zD4uyLOCr80NxA8QRQy2wDFMbIxnLrQQPQdt5BZTA&oe=66658A1A",
  },
  {
    title: "Caja",
    description:
      "En el área de caja acuden todos nuestros clientes locales a recibir el mejor marisco que se puede encontrar en la costa.",
    imageUrl:
      "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/261104186_455394072784530_2226475084703064686_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE6T4bxJwaMNEXx78N05j4lLjBhOS0Sm_guMGE5LRKb-CeBN-ML-cRNq_qQiQsjg_Lsn26O2KqjeqGn-HugBP3T&_nc_ohc=pwh9AjLmQJkQ7kNvgErCPaF&_nc_ht=scontent-sjc3-1.xx&oh=00_AYBYB1UADg4mOmBQwtTPPPMtFDPBF3EJiBmszjEboZD8rQ&oe=66656CE0",
  },
  {
    title: "Oficinas",
    description:
      "Nuestras oficinas están diseñadas para fomentar la productividad y la colaboración entre equipos.",
    imageUrl:
      "https://scontent.ftij5-1.fna.fbcdn.net/v/t1.6435-9/104410404_173606097629997_1438317234327784125_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGo9H0uJEZDPxneewfrIDM14gk69wNGtqfiCTr3A0a2p0riLRTL65efOpexJXGs6HGNagJL_LxZrBr_v5ODRk1U&_nc_ohc=GkmGNyfeUdIQ7kNvgFJdGtW&_nc_ht=scontent.ftij5-1.fna&oh=00_AYCv33MQ714aE3-5lbaQXZr9dvR5BLUQKhc3IOGHHbqVwA&oe=668039AC",
  },
  {
    title: "Pesca",
    description:
      "Nuestro personal cuenta con años de experiencia en trabajar en el mar para brindar los mejores productos.",
    imageUrl:
      "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/357405116_734115925386234_7244424777159838658_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF-suZC-dzPFlQ92lB3U90kcL7xItPxmmBwvvEi0_GaYBtriQC5Q3Fewwqlmih467rIfQ2i6hdVfMwXf1UqvVzf&_nc_ohc=DBYAIR1aoskQ7kNvgFo0mH4&_nc_ht=scontent-sjc3-1.xx&oh=00_AYAUbncizrUDlMuICRoPCqZZPjdDh68c6CNlKKaNL8Kk7Q&oe=6665857C",
  },
  {
    title: "Clientes",
    description:
      "Contamos con clientes que respaldan la calidad de nuestros servicios.",
    imageUrl:
      "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/360157737_742209227910237_2702371129537979506_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGbiccJr4Vgo0tXIuJxC3TsIg0uqVjR4YciDS6pWNHhh7--G2H3H6oYtdfjnkuCMEOYWs18IkAyUmoPjUTduOXu&_nc_ohc=6vHV6TVmZCIQ7kNvgHEyeVI&_nc_ht=scontent-sjc3-1.xx&oh=00_AYAEHbWG3CCRp8cYepwtB_CJcmfZlVjsn13OdHGvXgBLgQ&oe=66657207",
  },
  {
    title: "Calidad",
    description:
      "Nuestro principal objetivo es proporcionar la calidad más premium que se pueda encontrar para llenar las espectativa de los paladares de nuestros mexicanos.",
    imageUrl:
      "https://scontent.ftij5-1.fna.fbcdn.net/v/t1.6435-9/136979676_253736729616933_45429184546673852_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE7v2ZZOg5fTnYouKUFeY0vB1vx05gTzV8HW_HTmBPNX_ER1EXIaPL4EYz03O4SC1g-KR9EaCJQQ4zA3zs537_N&_nc_ohc=33sXyGXNeiwQ7kNvgFmWmm3&_nc_ht=scontent.ftij5-1.fna&oh=00_AYAlydKl648kxX0aYimmDul6BRq4Sowi6uc2HZqyP1yXXA&oe=66804568",
  },
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
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={installation.imageUrl}
                alt={installation.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">
                  {installation.title}
                </h2>
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
