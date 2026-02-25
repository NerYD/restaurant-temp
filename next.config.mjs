/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'site2.megatic.pt',
                port: '',
            },
        ],
    },
};

export default nextConfig;
