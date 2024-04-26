const rewrites = async () => {
  return [

  ];
};

const redirects = async () => {
  return [

  ];
};

// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: rewrites,
  redirects: redirects,
  
  compiler: {
    styledComponents: {
      // Enable display of the component name along with the generated className (needed for debugging).
      displayName: true,
      // Enable SSR support
      ssr: true,
      // Optional
      fileName: false,
    }
  },
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig
