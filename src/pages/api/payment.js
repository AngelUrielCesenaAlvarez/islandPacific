// SDK de Mercado Pago
import { MercadoPagoConfig } from "mercadopago";
// Agrega credenciales
const client = new MercadoPagoConfig({
  accessToken:
    "TEST-1246850848371112-060619-7efe4d6d87c7106a8f7cdc5310f7e5f6-1833683061",
});

const preference = new Preference(client);

preference
  .create({
    body: {
      items: [
        {
          title: "Mi producto",
          quantity: 1,
          unit_price: 85,
        },
      ],
    },
  })
  .then(console.log)
  .catch(console.log);
