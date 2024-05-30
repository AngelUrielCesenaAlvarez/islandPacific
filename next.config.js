const path = require('path');

module.exports = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  webpack: (config, options) => {
    // Agregar la carpeta src al array de módulos
    config.resolve.modules.push(path.resolve('./src'));

    // Configuración de alias
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');

    return config;
  },
  async redirects() {
    return [
      {
        source: '/page/profile',
        destination: '/', // Redirige a la página de inicio si se intenta prerenderizar
        permanent: false,
      },
    ]
  },
};
