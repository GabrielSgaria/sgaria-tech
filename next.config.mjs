/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: 'sa-east-1.graphassets.com'
        }]
    }

};

export default nextConfig;
